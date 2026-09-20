import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vokuk34lv.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="vokuk34lv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-text-bar-text-bar-formatting-format"} {...others} />);
}

export default Component;
