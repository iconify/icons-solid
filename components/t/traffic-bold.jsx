import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk6nt8boj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nk6nt8boj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:traffic-bold"} {...others} />);
}

export default Component;
