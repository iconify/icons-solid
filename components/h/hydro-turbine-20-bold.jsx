import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qc3aivm8q.css';
import '../../css/j/jvlfvgboy.css';
import '../../css/w/woe8reb4u.css';
import '../../css/y/yntic7bpn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qc3aivm8q"/><path class="jvlfvgboy"/><path class="woe8reb4u"/><path class="yntic7bpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydro-turbine-20-bold"} {...others} />);
}

export default Component;
