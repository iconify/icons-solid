import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a66xx_uzh.css';
import '../../css/c/c79jlob-l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a66xx_uzh"/><path class="c79jlob-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mailbox-48"} {...others} />);
}

export default Component;
