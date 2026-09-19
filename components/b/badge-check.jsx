import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ose1jpb8n.css';
import '../../css/h/hfzh1ebhh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ose1jpb8n"/><path class="hfzh1ebhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:badge-check"} {...others} />);
}

export default Component;
