import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnc2i3bjg.css';
import '../../css/q/q5fjd4e3y.css';
import '../../css/k/kyec3jbtu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hnc2i3bjg"/><path class="q5fjd4e3y"/><path class="kyec3jbtu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:quote-20"} {...others} />);
}

export default Component;
