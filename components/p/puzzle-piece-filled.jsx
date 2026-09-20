import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfvc8y0xh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cfvc8y0xh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:puzzle-piece-filled"} {...others} />);
}

export default Component;
