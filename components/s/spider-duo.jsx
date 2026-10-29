import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/utm6t1y8u.css';
import '../../css/y/yezjuwipq.css';
import '../../css/p/p3dq04btg.css';
import '../../css/n/nn2f9gisi.css';
import '../../css/d/dk-3u6b9m.css';
import '../../css/g/gcej-6bbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="utm6t1y8u"/><path class="yezjuwipq"/><path class="p3dq04btg wm-s"/><path class="nn2f9gisi"/><path class="dk-3u6b9m"/><path class="gcej-6bbf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:spider-duo"} {...others} />);
}

export default Component;
