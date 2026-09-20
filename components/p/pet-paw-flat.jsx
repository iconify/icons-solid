import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0w6l0kta.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="p0w6l0kta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:pet-paw-flat"} {...others} />);
}

export default Component;
