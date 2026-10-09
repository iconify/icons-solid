import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkihj-w6g.css';
import '../../css/y/yhip1xbph.css';
import '../../css/y/yau-9gbzu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rkihj-w6g"/><path class="yhip1xbph"/><path class="yau-9gbzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:esg-20"} {...others} />);
}

export default Component;
