import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxj3tdbao.css';

const viewBox = {"width":641,"height":512};
const content = `<path class="fxj3tdbao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:upwork"} {...others} />);
}

export default Component;
