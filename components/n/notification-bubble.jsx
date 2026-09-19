import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xz0tm-ban.css';
import '../../css/n/no9e52b3o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xz0tm-ban"/><path class="no9e52b3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:notification-bubble"} {...others} />);
}

export default Component;
