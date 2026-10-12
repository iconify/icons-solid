import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxekl0bew.css';
import '../../css/y/yolid685o.css';
import '../../css/t/t-md-bb-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wxekl0bew"/><path class="yolid685o"/><path class="t-md-bb-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ball-baseball"} {...others} />);
}

export default Component;
