import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/q/qflgs-bjq.css';
import '../../css/s/sv2sgccms.css';
import '../../css/e/el9dwsrvm.css';
import '../../css/o/o4kgumbgv.css';
import '../../css/w/wsfopvbjc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="qflgs-bjq wm-shadow"/><path class="sv2sgccms wm-shadow"/><path class="el9dwsrvm"/><path class="o4kgumbgv"/><path class="wsfopvbjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:dices"} {...others} />);
}

export default Component;
