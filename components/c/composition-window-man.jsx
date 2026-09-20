import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ap271rfbz.css';
import '../../css/k/k9xj5kdlo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ap271rfbz"/><path class="k9xj5kdlo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:composition-window-man"} {...others} />);
}

export default Component;
