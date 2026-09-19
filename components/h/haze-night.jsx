import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y84bdgn_e.css';
import '../../css/d/dw5u3v8yx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y84bdgn_e"/><path class="dw5u3v8yx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:haze-night"} {...others} />);
}

export default Component;
