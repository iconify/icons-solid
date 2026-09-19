import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mzy1_7bxq.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="mzy1_7bxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:menu-fill-12"} {...others} />);
}

export default Component;
