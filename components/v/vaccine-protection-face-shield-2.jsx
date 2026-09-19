import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/apjx_3bim.css';
import '../../css/s/sp_s36tzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="apjx_3bim"/><path class="sp_s36tzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:vaccine-protection-face-shield-2"} {...others} />);
}

export default Component;
