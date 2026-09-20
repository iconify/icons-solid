import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zc4pwacxv.css';
import '../../css/z/zlb7f_b-f.css';
import '../../css/w/wh5rpxx5e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="zc4pwacxv"/><path class="zlb7f_b-f"/><path class="wh5rpxx5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:content-ink-pen-write"} {...others} />);
}

export default Component;
