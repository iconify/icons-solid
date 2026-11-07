import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/loxl4zb4k.css';
import '../../css/t/tumocjvoo.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/s/sjb0kabnr.css';
import '../../css/e/ezby3sblm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="loxl4zb4k"/><path class="tumocjvoo"/><g class="xtpeb-edw"><path class="sjb0kabnr"/><path class="ezby3sblm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ranking-bold-duotone"} {...others} />);
}

export default Component;
