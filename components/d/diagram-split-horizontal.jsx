import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmo9ppb1i.css';
import '../../css/r/rf6qy1bai.css';
import '../../css/h/hsg9le06j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lmo9ppb1i"><path class="rf6qy1bai"/><path class="hsg9le06j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:diagram-split-horizontal"} {...others} />);
}

export default Component;
