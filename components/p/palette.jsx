import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/v2n433bvh.css';
import '../../css/m/m-jxf2n6e.css';
import '../../css/a/aipyz6-ot.css';
import '../../css/q/q51_umb5q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="v2n433bvh wm-shadow"/><path class="m-jxf2n6e wm-shadow"/><path class="aipyz6-ot"/><path class="q51_umb5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:palette"} {...others} />);
}

export default Component;
