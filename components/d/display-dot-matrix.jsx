import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_s_vqb5k.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="q_s_vqb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:display-dot-matrix"} {...others} />);
}

export default Component;
