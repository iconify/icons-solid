import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xk8q7na1n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xk8q7na1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:ai-edit-robot-remix"} {...others} />);
}

export default Component;
