import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf1wgwbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yf1wgwbvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bag-heart-filled"} {...others} />);
}

export default Component;
