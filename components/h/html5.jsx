import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dpq6rsb-m.css';
import '../../css/r/rsou20czl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dpq6rsb-m"/><path class="rsou20czl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:html5"} {...others} />);
}

export default Component;
