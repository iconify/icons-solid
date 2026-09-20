import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw0i9f9gy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yw0i9f9gy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:gorilla"} {...others} />);
}

export default Component;
