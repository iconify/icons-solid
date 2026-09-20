import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nk75zlbao.css';
import '../../css/u/ukzn3sb-t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nk75zlbao"/><path class="ukzn3sb-t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:network-signal"} {...others} />);
}

export default Component;
