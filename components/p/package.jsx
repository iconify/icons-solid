import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/o/oyx_9jtno.css';
import '../../css/o/oc7a7eb5p.css';
import '../../css/n/n8ucc0y7x.css';
import '../../css/u/uncflbb5q.css';
import '../../css/x/xt92fd6te.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="oyx_9jtno"/><path class="oc7a7eb5p wm-shine"/><path class="n8ucc0y7x wm-k"/><path class="uncflbb5q wm-a"/><path class="wm-deco xt92fd6te"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:package"} {...others} />);
}

export default Component;
