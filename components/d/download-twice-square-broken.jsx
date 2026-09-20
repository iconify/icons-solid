import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qx4kgzb8b.css';
import '../../css/b/b8qhiqbyw.css';
import '../../css/y/yho9nxbfe.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="qx4kgzb8b"/><path class="b8qhiqbyw"/><path class="yho9nxbfe"/><path class="si_mtzbvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:download-twice-square-broken"} {...others} />);
}

export default Component;
