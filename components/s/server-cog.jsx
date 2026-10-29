import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cgi6aebyp.css';
import '../../css/j/jes-ovvpz.css';
import '../../css/e/ekmlpmtjg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="cgi6aebyp"/><path class="jes-ovvpz wm-a"/><path class="ekmlpmtjg wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:server-cog"} {...others} />);
}

export default Component;
