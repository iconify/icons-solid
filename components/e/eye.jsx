import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kepivwbki.css';
import '../../css/t/tyyeymbet.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kepivwbki"/><path class="tyyeymbet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:eye"} {...others} />);
}

export default Component;
