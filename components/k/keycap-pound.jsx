import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrks0fbpf.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/q/qsdeidzcc.css';
import '../../css/w/wz25ji4rl.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mrks0fbpf"/><g class="rpvb-o6bq"><path class="qsdeidzcc"/><path class="wz25ji4rl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:keycap-pound"} {...others} />);
}

export default Component;
