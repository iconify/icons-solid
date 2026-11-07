import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfzrs9bdi.css';
import '../../css/d/d3al2xbaq.css';
import '../../css/y/yu1x-pnxh.css';
import '../../css/x/xu1xjobpd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gfzrs9bdi"/><path class="d3al2xbaq"/><path class="yu1x-pnxh"/><path clip-rule="evenodd" class="xu1xjobpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:receive-twice-square-outline"} {...others} />);
}

export default Component;
