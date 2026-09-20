import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s4xnr_bdl.css';
import '../../css/q/q5oszr-ig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s4xnr_bdl"/><path class="q5oszr-ig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:bolt"} {...others} />);
}

export default Component;
