import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdsrg8boj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fdsrg8boj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:safe-2-line"} {...others} />);
}

export default Component;
