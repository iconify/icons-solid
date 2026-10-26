import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/z/zzea6b0lf.css';
import '../../css/z/z83axnb3z.css';
import '../../css/v/vg28oib3q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="zzea6b0lf"/><path class="z83axnb3z"/><path class="vg28oib3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:ghost"} {...others} />);
}

export default Component;
