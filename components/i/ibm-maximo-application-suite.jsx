import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipb3veb3j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ipb3veb3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-maximo-application-suite"} {...others} />);
}

export default Component;
