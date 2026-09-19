import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zryyp6ntt.css';

const viewBox = {"width":192,"height":512};
const content = `<path class="zryyp6ntt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:exclamation"} {...others} />);
}

export default Component;
