import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnz5lbemc.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="hnz5lbemc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-select-frame-cursor-frame-select"} {...others} />);
}

export default Component;
