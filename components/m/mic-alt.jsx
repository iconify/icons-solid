import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obq9c64fy.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="obq9c64fy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:mic-alt"} {...others} />);
}

export default Component;
