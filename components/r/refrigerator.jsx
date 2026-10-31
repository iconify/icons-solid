import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j9ab-lb9c.css';
import '../../css/m/mqmxu0x2c.css';
import '../../css/j/jkr8l4rcl.css';
import '../../css/z/zk7svcb2i.css';
import '../../css/n/nsb19lbrs.css';
import '../../css/y/y9x-x_bsw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="j9ab-lb9c wm-shadow"/><path class="mqmxu0x2c"/><path class="jkr8l4rcl"/><path class="zk7svcb2i"/><path class="nsb19lbrs"/><path class="y9x-x_bsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:refrigerator"} {...others} />);
}

export default Component;
