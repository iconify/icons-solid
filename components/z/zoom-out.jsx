import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/s/s5p35abnm.css';
import '../../css/l/lf5qjjiit.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="s5p35abnm"/><path class="lf5qjjiit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:zoom-out"} {...others} />);
}

export default Component;
