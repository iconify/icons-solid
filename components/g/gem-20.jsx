import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7c8n5bpv.css';
import '../../css/o/obndhi7my.css';
import '../../css/i/itu66bbfs.css';
import '../../css/f/f2mixfbea.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y7c8n5bpv"/><path class="obndhi7my"/><path class="itu66bbfs"/><path class="f2mixfbea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gem-20"} {...others} />);
}

export default Component;
