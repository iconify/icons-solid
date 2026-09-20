import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/l/l8tiy2eeu.css';
import '../../css/n/n1j1stbmb.css';
import '../../css/j/j7jrpp0bb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="l8tiy2eeu"/><path class="n1j1stbmb"/><path class="j7jrpp0bb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:sms-edit"} {...others} />);
}

export default Component;
