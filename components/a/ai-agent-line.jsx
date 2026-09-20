import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mtt9_ab8z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mtt9_ab8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:ai-agent-line"} {...others} />);
}

export default Component;
