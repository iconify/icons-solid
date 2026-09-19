import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/u/uvyahqobb.css';
import '../../css/t/tme94gjqp.css';
import '../../css/e/e4ufflyfi.css';
import '../../css/o/o21wcp09i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="uvyahqobb"/><path class="tme94gjqp"/><path class="e4ufflyfi"/><path class="o21wcp09i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ticket"} {...others} />);
}

export default Component;
