import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/etx2dtb8y.css';
import '../../css/a/aj--sacig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="etx2dtb8y"/><path class="aj--sacig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:wrap-text"} {...others} />);
}

export default Component;
