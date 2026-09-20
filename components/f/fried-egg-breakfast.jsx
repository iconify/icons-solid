import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/xz-j46zvw.css';
import '../../css/y/yjt9fsb1n.css';
import '../../css/z/zfhy-qble.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="xz-j46zvw"/><path class="yjt9fsb1n"/><path class="zfhy-qble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:fried-egg-breakfast"} {...others} />);
}

export default Component;
