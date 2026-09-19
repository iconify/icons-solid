import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0tx4u8rf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k0tx4u8rf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:home-alt-2"} {...others} />);
}

export default Component;
