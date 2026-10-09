import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwfalccns.css';
import '../../css/v/v4w_f_aee.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rwfalccns"/><path class="v4w_f_aee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carabiner-20"} {...others} />);
}

export default Component;
