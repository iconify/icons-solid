import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwyep9bvy.css';
import '../../css/b/buhaxzbzx.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/i/i3tz2qbsp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gwyep9bvy"/><path class="buhaxzbzx"/><path class="aqsnv9bnd"/><path class="i3tz2qbsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clock-alert-20-bold"} {...others} />);
}

export default Component;
