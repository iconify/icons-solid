import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdtzqfxwt.css';
import '../../css/t/tx9vi1y_m.css';
import '../../css/t/tr7cg_bss.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mdtzqfxwt"/><path class="tx9vi1y_m"/><path class="tr7cg_bss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dawarich-light"} {...others} />);
}

export default Component;
