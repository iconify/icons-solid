import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ys5e_r7yr.css';
import '../../css/e/ey1v8gbte.css';

const viewBox = {"width":16,"height":12};
const content = `<path class="ys5e_r7yr"/><path class="ey1v8gbte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:fastforward"} {...others} />);
}

export default Component;
