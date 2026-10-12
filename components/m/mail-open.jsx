import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/woun9fbuf.css';
import '../../css/l/lb3rsfbjt.css';
import '../../css/d/dy6wpbbqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="woun9fbuf"/><path class="lb3rsfbjt"/><path class="dy6wpbbqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-open"} {...others} />);
}

export default Component;
