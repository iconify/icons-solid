import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li-86naqg.css';
import '../../css/p/p4jbj4bqj.css';
import '../../css/s/sd-5jrdgc.css';
import '../../css/m/mlwzxf7dy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="li-86naqg"/><path clip-rule="evenodd" class="p4jbj4bqj"/><path clip-rule="evenodd" class="sd-5jrdgc"/><path class="mlwzxf7dy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:coins-stack-flat"} {...others} />);
}

export default Component;
