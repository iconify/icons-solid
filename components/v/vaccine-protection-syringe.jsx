import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/brz87i4nf.css';
import '../../css/q/qnvt8pbsc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="brz87i4nf"/><path class="qnvt8pbsc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:vaccine-protection-syringe"} {...others} />);
}

export default Component;
