import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bywjp-bic.css';
import '../../css/v/v-3rt0bmf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bywjp-bic"/><path class="v-3rt0bmf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:trash-3"} {...others} />);
}

export default Component;
