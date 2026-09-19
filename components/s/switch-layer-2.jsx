import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy91uv1gr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oy91uv1gr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:switch-layer-2"} {...others} />);
}

export default Component;
