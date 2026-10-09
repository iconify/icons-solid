import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_7fyptgq.css';
import '../../css/v/v-wpb5q2n.css';
import '../../css/m/ms3vv49wg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z_7fyptgq"/><path class="v-wpb5q2n"/><path class="ms3vv49wg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bookmark-plus-20"} {...others} />);
}

export default Component;
