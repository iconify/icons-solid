import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/j/jcm163ggr.css';
import '../../css/c/cr1l6rb1j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="jcm163ggr"/><path class="cr1l6rb1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:arrow-bend-right-down-2"} {...others} />);
}

export default Component;
