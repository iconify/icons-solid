import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r0r7u1_0t.css';
import '../../css/s/s3lm-mglt.css';
import '../../css/q/qi4ha9bda.css';
import '../../css/y/yjdxjfw-o.css';
import '../../css/w/wjqa29b2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="r0r7u1_0t"/><path class="s3lm-mglt wm-a"/><path class="qi4ha9bda wm-s"/><path class="yjdxjfw-o"/><path class="wjqa29b2k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:snowman-duo"} {...others} />);
}

export default Component;
