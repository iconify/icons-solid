import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgjp5_b_u.css';
import '../../css/z/zkcn4_12l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wgjp5_b_u"/><path class="zkcn4_12l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-solar-20"} {...others} />);
}

export default Component;
