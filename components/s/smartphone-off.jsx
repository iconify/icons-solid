import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0bo2fi3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g0bo2fi3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:smartphone-off"} {...others} />);
}

export default Component;
