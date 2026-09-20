import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kjfhg4w3r.css';
import '../../css/e/e-97h3b4w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="kjfhg4w3r"/><path class="e-97h3b4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:ai-generate-portrait-image-spark"} {...others} />);
}

export default Component;
