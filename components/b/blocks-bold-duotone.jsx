import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/q3zld5bik.css';
import '../../css/m/mbe0glb8u.css';
import '../../css/s/szmqvptdx.css';
import '../../css/u/u62sx-gut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="q3zld5bik"/><path class="mbe0glb8u"/><path class="szmqvptdx"/></g><path class="u62sx-gut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:blocks-bold-duotone"} {...others} />);
}

export default Component;
