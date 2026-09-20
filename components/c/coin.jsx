import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mi0gayb5c.css';
import '../../css/n/nmv9v_bkx.css';
import '../../css/f/fmr0e_lvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mi0gayb5c"/><path class="nmv9v_bkx"/><path class="fmr0e_lvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:coin"} {...others} />);
}

export default Component;
