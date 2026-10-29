import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1qt20k5x.css';
import '../../css/c/cnpmqjbkf.css';
import '../../css/n/n1frkeb8b.css';
import '../../css/n/nv6oopddu.css';
import '../../css/w/wj3kfezij.css';
import '../../css/o/oat9a2bar.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p1qt20k5x wm-shadow"/><path class="cnpmqjbkf wm-k"/><path class="n1frkeb8b wm-k"/><path class="nv6oopddu wm-k"/><path class="wj3kfezij wm-k"/><path class="oat9a2bar wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:dollar-sign"} {...others} />);
}

export default Component;
