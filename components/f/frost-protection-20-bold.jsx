import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vwehzwmcr.css';
import '../../css/a/au2lhd6pt.css';
import '../../css/o/o-1yhzbci.css';
import '../../css/r/r8qx4xbrt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vwehzwmcr"/><path class="au2lhd6pt"/><path class="o-1yhzbci"/><path class="r8qx4xbrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:frost-protection-20-bold"} {...others} />);
}

export default Component;
