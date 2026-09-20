import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v-0-ewrjt.css';
import '../../css/q/q27rlmatp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v-0-ewrjt"/><path class="q27rlmatp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:bicycle"} {...others} />);
}

export default Component;
