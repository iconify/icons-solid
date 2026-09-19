import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7w3pab8i.css';
import '../../css/z/zb3612vqu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="d7w3pab8i"/><path class="zb3612vqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:eye-lashes-bold"} {...others} />);
}

export default Component;
