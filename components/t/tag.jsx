import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wxmrz8s0w.css';
import '../../css/d/dhj46m5kl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wxmrz8s0w"/><path class="dhj46m5kl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:tag"} {...others} />);
}

export default Component;
