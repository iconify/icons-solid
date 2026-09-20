import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fy-_ygbqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fy-_ygbqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi-light:arrange-send-to-back"} {...others} />);
}

export default Component;
