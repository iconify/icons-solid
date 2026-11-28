import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n9plpzk-a.css';
import '../../css/n/nimxhubxl.css';
import '../../css/j/j9vo68s_w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="n9plpzk-a"/><path class="nimxhubxl"/><path class="j9vo68s_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flag-off"} {...others} />);
}

export default Component;
