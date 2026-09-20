import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bywjp-bic.css';
import '../../css/n/n5brivc_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bywjp-bic"/><path class="n5brivc_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:trash-2"} {...others} />);
}

export default Component;
