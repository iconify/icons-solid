import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/goe_lpbge.css';
import '../../css/f/fq6fmdr9f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="goe_lpbge"/><path class="fq6fmdr9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:turtle-48"} {...others} />);
}

export default Component;
