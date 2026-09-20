import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhiwy_b2g.css';
import '../../css/b/byuk8hbxb.css';
import '../../css/f/f85i14bwg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fhiwy_b2g"/><path class="byuk8hbxb"/><path class="f85i14bwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:weather-cloud-wind-3"} {...others} />);
}

export default Component;
