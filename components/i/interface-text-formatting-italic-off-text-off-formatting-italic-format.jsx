import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsthl7beb.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rsthl7beb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-italic-off-text-off-formatting-italic-format"} {...others} />);
}

export default Component;
