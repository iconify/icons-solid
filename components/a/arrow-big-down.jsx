import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1m4_zbzx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z1m4_zbzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:arrow-big-down"} {...others} />);
}

export default Component;
