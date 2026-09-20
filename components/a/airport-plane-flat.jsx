import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjccp8b_o.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="mjccp8b_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:airport-plane-flat"} {...others} />);
}

export default Component;
