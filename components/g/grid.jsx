import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aj5gz5b0j.css';
import '../../css/t/tontn-b1j.css';

const viewBox = {"width":31,"height":32};
const content = `<g class="cuyn6tgcc"><path class="aj5gz5b0j"/><path class="tontn-b1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:grid"} {...others} />);
}

export default Component;
