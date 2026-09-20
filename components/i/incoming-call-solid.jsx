import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p3vpn-b5r.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="p3vpn-b5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:incoming-call-solid"} {...others} />);
}

export default Component;
