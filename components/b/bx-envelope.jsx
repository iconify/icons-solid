import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg4x4-miu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xg4x4-miu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-envelope"} {...others} />);
}

export default Component;
