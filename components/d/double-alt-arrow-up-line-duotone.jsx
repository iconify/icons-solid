import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qowkc_bfp.css';
import '../../css/m/mad_geb1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qowkc_bfp"/><path class="mad_geb1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-up-line-duotone"} {...others} />);
}

export default Component;
