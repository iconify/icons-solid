import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/valalh2xc.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="valalh2xc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:x"} {...others} />);
}

export default Component;
