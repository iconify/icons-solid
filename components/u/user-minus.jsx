import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxq8u4x7h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dxq8u4x7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:user-minus"} {...others} />);
}

export default Component;
