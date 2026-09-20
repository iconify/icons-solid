import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nm7lsubwu.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="nm7lsubwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:severity-unknown"} {...others} />);
}

export default Component;
