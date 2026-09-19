import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/u/uvh5rrbvb.css';
import '../../css/f/f6-wovb1x.css';
import '../../css/q/qu-o3tbth.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><rect class="uvh5rrbvb"/><path class="f6-wovb1x"/><path class="qu-o3tbth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mouse-one"} {...others} />);
}

export default Component;
