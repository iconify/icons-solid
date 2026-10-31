import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/whhry102c.css';
import '../../css/s/sschd19-t.css';
import '../../css/m/m479thb1l.css';
import '../../css/q/q6n5xnb3h.css';
import '../../css/v/vr6j8dwik.css';
import '../../css/j/ja121jbag.css';
import '../../css/b/bb8_-bc6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="whhry102c wm-shadow"/><path class="sschd19-t"/><path class="m479thb1l"/><path class="q6n5xnb3h"/><path class="vr6j8dwik wm-s"/><path class="ja121jbag"/><path class="bb8_-bc6z wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cloud-cog"} {...others} />);
}

export default Component;
