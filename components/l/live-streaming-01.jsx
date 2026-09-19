import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kpmuueb9k.css';
import '../../css/m/mb6-_-byk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kpmuueb9k"/><path class="mb6-_-byk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:live-streaming-01"} {...others} />);
}

export default Component;
