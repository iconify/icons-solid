import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_g12oiot.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="h_g12oiot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:earth-1-solid"} {...others} />);
}

export default Component;
