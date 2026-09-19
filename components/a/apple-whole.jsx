import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqwj2_7hk.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="hqwj2_7hk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:apple-whole"} {...others} />);
}

export default Component;
