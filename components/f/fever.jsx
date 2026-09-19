import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f4aqigbyu.css';
import '../../css/m/mhe045bgf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="f4aqigbyu"/><path class="mhe045bgf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:fever"} {...others} />);
}

export default Component;
