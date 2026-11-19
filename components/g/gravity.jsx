import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/agsd27bib.css';
import '../../css/l/lw5b8bb6s.css';
import '../../css/f/fpk8ambbn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="agsd27bib"/><path class="lw5b8bb6s"/><path class="fpk8ambbn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:gravity"} {...others} />);
}

export default Component;
