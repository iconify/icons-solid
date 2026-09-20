import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/ckzu53bpo.css';
import '../../css/p/pwm306-zi.css';
import '../../css/i/ifx_q8b8t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ckzu53bpo"/><path class="pwm306-zi"/><path class="ifx_q8b8t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:monetization-tablet"} {...others} />);
}

export default Component;
