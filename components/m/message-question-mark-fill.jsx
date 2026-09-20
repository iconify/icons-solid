import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/quif2tamo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="quif2tamo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:message-question-mark-fill"} {...others} />);
}

export default Component;
