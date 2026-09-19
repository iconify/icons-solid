import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1cieen_e.css';
import '../../css/f/fu72iwgtz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n1cieen_e"/><path class="fu72iwgtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:message-circle-question-mark"} {...others} />);
}

export default Component;
