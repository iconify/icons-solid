import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xszfmab4u.css';
import '../../css/h/hutzz7vvf.css';
import '../../css/d/d_7n5kb3o.css';
import '../../css/u/u-6rxwbts.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xszfmab4u"/><path class="hutzz7vvf"/><path class="d_7n5kb3o"/><path class="u-6rxwbts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scada-48"} {...others} />);
}

export default Component;
