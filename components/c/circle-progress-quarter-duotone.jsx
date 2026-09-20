import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l-_oj69zk.css';
import '../../css/w/wbm9ombma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l-_oj69zk"/><path class="wbm9ombma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-progress-quarter-duotone"} {...others} />);
}

export default Component;
