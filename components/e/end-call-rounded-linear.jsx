import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8sx1wb1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k8sx1wb1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:end-call-rounded-linear"} {...others} />);
}

export default Component;
