import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8o30jhxi.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="f8o30jhxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-right-arrow-right-keyboard"} {...others} />);
}

export default Component;
