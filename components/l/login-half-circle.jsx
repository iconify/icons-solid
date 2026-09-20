import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ps7k2ibyy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ps7k2ibyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:login-half-circle"} {...others} />);
}

export default Component;
