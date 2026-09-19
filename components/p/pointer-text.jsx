import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axs82db6h.css';
import '../../css/d/d1z03cbds.css';
import '../../css/t/tjlr-ybbo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="axs82db6h"/><path class="d1z03cbds"/><path class="tjlr-ybbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:pointer-text"} {...others} />);
}

export default Component;
