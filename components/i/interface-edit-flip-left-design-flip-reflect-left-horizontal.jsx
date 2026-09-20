import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/meonpbcpx.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="meonpbcpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-edit-flip-left-design-flip-reflect-left-horizontal"} {...others} />);
}

export default Component;
