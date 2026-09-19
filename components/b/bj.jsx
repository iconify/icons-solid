import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j1j3fgb5s.css';
import '../../css/t/tnr_bln7f.css';
import '../../css/q/qtv4occad.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j1j3fgb5s"/><path clip-rule="evenodd" class="tnr_bln7f"/><path class="qtv4occad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:bj"} {...others} />);
}

export default Component;
