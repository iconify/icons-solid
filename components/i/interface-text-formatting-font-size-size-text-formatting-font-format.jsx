import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbuir7ayr.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="nbuir7ayr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-font-size-size-text-formatting-font-format"} {...others} />);
}

export default Component;
