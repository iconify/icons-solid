import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kg2fxtbmy.css';
import '../../css/x/xu-4hibki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kg2fxtbmy"/><path class="xu-4hibki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:github"} {...others} />);
}

export default Component;
