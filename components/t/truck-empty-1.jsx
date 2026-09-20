import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/su8n_0nuw.css';
import '../../css/u/uxmrwmbam.css';
import '../../css/q/qygxjk77z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="su8n_0nuw"/><path class="uxmrwmbam"/><path class="qygxjk77z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:truck-empty-1"} {...others} />);
}

export default Component;
