import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/ldmkd1blz.css';
import '../../css/x/xw25w-bst.css';
import '../../css/r/rie-5-99g.css';
import '../../css/k/k3djch2so.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ldmkd1blz"/><path class="xw25w-bst"/><path class="rie-5-99g"/><path class="k3djch2so"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:vaccine-protection-face-shield-1"} {...others} />);
}

export default Component;
