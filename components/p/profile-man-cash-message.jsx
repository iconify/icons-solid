import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iil_g-bem.css';
import '../../css/b/bdn143hpv.css';
import '../../css/u/uevrt6bjj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="iil_g-bem"/><path class="bdn143hpv"/><path class="uevrt6bjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:profile-man-cash-message"} {...others} />);
}

export default Component;
