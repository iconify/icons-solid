import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cy5l3qugy.css';
import '../../css/c/c8sr93g9e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cy5l3qugy"/><path class="c8sr93g9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:keyframes-couple"} {...others} />);
}

export default Component;
