import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/a/ar6svccon.css';
import '../../css/c/c6yv8di5i.css';
import '../../css/c/c25go_0_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="ar6svccon"/><path class="c6yv8di5i"/></g><path class="c25go_0_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
