import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1za3mggn.css';
import '../../css/s/s130yc3zu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l1za3mggn"/><path class="s130yc3zu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:flow-modeler-reference"} {...others} />);
}

export default Component;
