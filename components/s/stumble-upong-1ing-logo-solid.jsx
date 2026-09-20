import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx4m1cb0n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tx4m1cb0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:stumble-upong-1ing-logo-solid"} {...others} />);
}

export default Component;
