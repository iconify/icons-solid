import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z22a7qbic.css';
import '../../css/a/ak65cgiry.css';
import '../../css/n/n7_q_sbsa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a z22a7qbic"/><path class="ak65cgiry wm-k"/><path class="n7_q_sbsa wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chart-line"} {...others} />);
}

export default Component;
