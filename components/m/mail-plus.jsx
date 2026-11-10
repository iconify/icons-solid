import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qn95rwb8c.css';
import '../../css/z/zf5bh8bck.css';
import '../../css/f/fauxhqbxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qn95rwb8c"/><path class="zf5bh8bck"/><path class="fauxhqbxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mail-plus"} {...others} />);
}

export default Component;
