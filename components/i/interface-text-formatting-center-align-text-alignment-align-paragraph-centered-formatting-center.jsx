import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s63-c7bbr.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="s63-c7bbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-center-align-text-alignment-align-paragraph-centered-formatting-center"} {...others} />);
}

export default Component;
