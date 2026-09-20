import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hdd07c15n.css';
import '../../css/j/jsz_f-pus.css';
import '../../css/v/v_wcr0b8d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="hdd07c15n"/><path class="jsz_f-pus"/><path class="v_wcr0b8d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:divide-circle"} {...others} />);
}

export default Component;
