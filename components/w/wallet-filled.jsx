import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4h_m-qgy.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="v4h_m-qgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:wallet-filled"} {...others} />);
}

export default Component;
