import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/l/lavh340ja.css';
import '../../css/v/v6d5xqugh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="lavh340ja"/><path class="v6d5xqugh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:traffic-light"} {...others} />);
}

export default Component;
