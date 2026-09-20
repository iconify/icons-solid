import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aq5g_8rsc.css';
import '../../css/k/kjdriabau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="aq5g_8rsc"/><path class="kjdriabau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:paper-write"} {...others} />);
}

export default Component;
