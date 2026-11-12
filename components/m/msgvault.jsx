import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rod24kbrj.css';
import '../../css/g/g_wa16mho.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rod24kbrj"/><path class="g_wa16mho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:msgvault"} {...others} />);
}

export default Component;
