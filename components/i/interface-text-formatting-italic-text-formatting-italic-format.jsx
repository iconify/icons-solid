import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qroav2bif.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="qroav2bif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-italic-text-formatting-italic-format"} {...others} />);
}

export default Component;
