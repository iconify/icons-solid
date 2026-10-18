import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xszfmab4u.css';
import '../../css/h/hutzz7vvf.css';
import '../../css/b/b-qq9xb5i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xszfmab4u"/><path class="hutzz7vvf"/><path class="b-qq9xb5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-monitoring-48"} {...others} />);
}

export default Component;
