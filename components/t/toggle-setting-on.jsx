import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/b4vu6sw6p.css';
import '../../css/p/pd96x61hh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="b4vu6sw6p"/><path class="pd96x61hh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:toggle-setting-on"} {...others} />);
}

export default Component;
