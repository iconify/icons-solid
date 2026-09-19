import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/x3232dbkq.css';
import '../../css/d/dqs93qb0x.css';
import '../../css/e/erfydac2v.css';
import '../../css/l/lgov11kvf.css';

const viewBox = {"width":80,"height":80};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="x3232dbkq"/><path class="dqs93qb0x"/><path class="erfydac2v"/><path class="lgov11kvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:save-1-outline"} {...others} />);
}

export default Component;
