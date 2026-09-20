import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd7sdd_nh.css';
import '../../css/v/v8fd06b4j.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qd7sdd_nh"/><path class="v8fd06b4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:maple-leaf"} {...others} />);
}

export default Component;
