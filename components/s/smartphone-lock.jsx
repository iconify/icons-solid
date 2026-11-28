import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj4_kbeau.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zj4_kbeau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:smartphone-lock"} {...others} />);
}

export default Component;
