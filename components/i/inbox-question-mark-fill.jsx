import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_zh3nbon.css';
import '../../css/f/f-euyubsh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q_zh3nbon"/><path class="f-euyubsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:inbox-question-mark-fill"} {...others} />);
}

export default Component;
