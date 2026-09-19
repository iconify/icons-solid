import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wuy3_33xc.css';
import '../../css/p/p3uaq9bss.css';
import '../../css/a/a4ahv-08i.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="wuy3_33xc"/><path class="p3uaq9bss"/><path class="a4ahv-08i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:mq-4x3"} {...others} />);
}

export default Component;
