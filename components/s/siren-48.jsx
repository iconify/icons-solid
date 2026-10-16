import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uu8m7-b_x.css';
import '../../css/y/ytutm3h1u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uu8m7-b_x"/><path class="ytutm3h1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:siren-48"} {...others} />);
}

export default Component;
