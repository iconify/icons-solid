import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/do_1vtxvr.css';
import '../../css/s/s3w23xbxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="do_1vtxvr"/><path class="s3w23xbxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:text-box"} {...others} />);
}

export default Component;
