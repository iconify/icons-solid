import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpq5tdlys.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="wpq5tdlys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-quotation-1-quote-quotation-format-formatting-open-close-marks-text"} {...others} />);
}

export default Component;
