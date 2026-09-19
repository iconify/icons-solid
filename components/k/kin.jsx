import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q-u5k_5fo.css';
import '../../css/h/h8cnwcbct.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="q-u5k_5fo"/><path class="h8cnwcbct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:kin"} {...others} />);
}

export default Component;
