import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/wesvssbai.css';
import '../../css/w/w9bf4kb6r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="wesvssbai"/><path class="w9bf4kb6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:location-add"} {...others} />);
}

export default Component;
