import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qg7v921kl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qg7v921kl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:ai-generate-3d-fill"} {...others} />);
}

export default Component;
