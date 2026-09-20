import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smpy58bfi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="smpy58bfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:new-japan-pro-wrestling"} {...others} />);
}

export default Component;
