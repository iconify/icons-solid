import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/d/dayjs-bgu.css';
import '../../css/d/dr1p0554f.css';
import '../../css/a/a0yh6z_ij.css';
import '../../css/b/boyowm1xr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="dayjs-bgu"/><path class="dr1p0554f"/></g><path class="a0yh6z_ij"/><path class="boyowm1xr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:users-group-rounded-bold-duotone"} {...others} />);
}

export default Component;
