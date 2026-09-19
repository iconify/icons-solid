import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tybfk_b5b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tybfk_b5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:cloud-done"} {...others} />);
}

export default Component;
