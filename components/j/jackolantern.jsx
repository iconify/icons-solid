import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o3pnteb4q.css';
import '../../css/z/z8w7qxj_f.css';
import '../../css/i/ikqyocnfd.css';
import '../../css/r/rcpunmh1x.css';
import '../../css/h/h34w4lb7w.css';
import '../../css/x/xemfdgbmo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o3pnteb4q"/><path class="z8w7qxj_f"/><path class="ikqyocnfd"/><path class="rcpunmh1x"/><path class="h34w4lb7w"/><path class="xemfdgbmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:jackolantern"} {...others} />);
}

export default Component;
