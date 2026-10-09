import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y58kh1nko.css';
import '../../css/b/b97oakqpf.css';
import '../../css/y/y8gnmo4cm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y58kh1nko"/><path class="b97oakqpf"/><path class="y8gnmo4cm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:service-vessel-20"} {...others} />);
}

export default Component;
