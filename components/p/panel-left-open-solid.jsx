import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/drpy59pns.css';
import '../../css/x/x5d2dtuag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="drpy59pns"/><path class="wm-a x5d2dtuag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:panel-left-open-solid"} {...others} />);
}

export default Component;
