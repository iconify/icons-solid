import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pf63vxpfw.css';
import '../../css/h/hngcoxbkk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pf63vxpfw"/><path class="hngcoxbkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:baikal-light"} {...others} />);
}

export default Component;
