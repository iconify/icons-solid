import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtwe4hbwm.css';
import '../../css/g/gqd57kb3d.css';
import '../../css/y/yrkjdvelx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wtwe4hbwm"/><path class="gqd57kb3d"/><path class="yrkjdvelx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-treatment-48"} {...others} />);
}

export default Component;
