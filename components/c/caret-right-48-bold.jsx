import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dda_dvbmt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dda_dvbmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:caret-right-48-bold"} {...others} />);
}

export default Component;
