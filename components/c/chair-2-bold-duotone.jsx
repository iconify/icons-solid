import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eo9pi9bir.css';
import '../../css/f/f5_zu-bul.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/d/d5a-axoez.css';
import '../../css/p/prv4iebuw.css';
import '../../css/a/aeb0jzmcy.css';
import '../../css/n/nvlo4nbyy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eo9pi9bir"/><path class="f5_zu-bul"/><g class="xtpeb-edw"><path class="d5a-axoez"/><path class="prv4iebuw"/><path class="aeb0jzmcy"/><path class="nvlo4nbyy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chair-2-bold-duotone"} {...others} />);
}

export default Component;
