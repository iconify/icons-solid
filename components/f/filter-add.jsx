import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/m/mdmvytbbu.css';
import '../../css/z/zaw73nbiu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="mdmvytbbu"/><path class="zaw73nbiu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:filter-add"} {...others} />);
}

export default Component;
