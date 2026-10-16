import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-z7esbav.css';
import '../../css/x/xpsvsqb_r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d-z7esbav"/><path class="xpsvsqb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:face-shield-48"} {...others} />);
}

export default Component;
