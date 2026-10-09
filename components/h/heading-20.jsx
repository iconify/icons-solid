import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8ikizbpd.css';
import '../../css/q/q_u57ubre.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k8ikizbpd"/><path class="q_u57ubre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heading-20"} {...others} />);
}

export default Component;
