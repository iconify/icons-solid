import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bz9vesfmm.css';
import '../../css/x/xbxc1rbdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bz9vesfmm"/><path class="xbxc1rbdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:curly-brackets"} {...others} />);
}

export default Component;
