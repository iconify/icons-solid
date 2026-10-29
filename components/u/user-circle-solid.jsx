import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hx1tun3fq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hx1tun3fq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-circle-solid"} {...others} />);
}

export default Component;
