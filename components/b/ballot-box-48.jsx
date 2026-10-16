import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbmoypoyr.css';
import '../../css/o/osid_1eik.css';
import '../../css/s/s9kt2ry7w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dbmoypoyr"/><path class="osid_1eik"/><path class="s9kt2ry7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ballot-box-48"} {...others} />);
}

export default Component;
