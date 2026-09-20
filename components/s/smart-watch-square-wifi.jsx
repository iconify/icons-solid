import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmo9ppb1i.css';
import '../../css/t/t1ugwwbcq.css';
import '../../css/c/ckh91fd6y.css';
import '../../css/l/ltw32c2ui.css';
import '../../css/y/yvwcvyzae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lmo9ppb1i"><path class="t1ugwwbcq"/><path class="ckh91fd6y"/><path class="ltw32c2ui"/><path class="yvwcvyzae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:smart-watch-square-wifi"} {...others} />);
}

export default Component;
