import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukdg_s_uj.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="ukdg_s_uj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:dumpster-fire"} {...others} />);
}

export default Component;
