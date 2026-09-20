import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/phmuk5bsk.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="phmuk5bsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-picker-color-colors-design-dropper-eye-eyedrop-eyedropper-painting-picker"} {...others} />);
}

export default Component;
