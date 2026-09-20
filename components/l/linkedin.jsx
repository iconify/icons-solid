import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oi2yf5bqh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oi2yf5bqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:linkedin"} {...others} />);
}

export default Component;
