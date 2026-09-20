import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wivg6zlgt.css';
import '../../css/z/z579v_o_z.css';
import '../../css/v/v4-iuhyyx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wivg6zlgt"/><path class="z579v_o_z"/><path class="v4-iuhyyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:home-security-lock"} {...others} />);
}

export default Component;
