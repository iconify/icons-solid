import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2neunb3u.css';
import '../../css/v/vd_rptthx.css';
import '../../css/c/c9fw31b7n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2neunb3u"/><path class="vd_rptthx"/><path class="c9fw31b7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:face-cool-48-bold"} {...others} />);
}

export default Component;
