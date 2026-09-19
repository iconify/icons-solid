import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pew3ofbkh.css';
import '../../css/f/fp1_w-bip.css';
import '../../css/j/j57h7grwb.css';
import '../../css/o/opicw6a2l.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="pew3ofbkh"/><path class="fp1_w-bip"/><path class="j57h7grwb"/><path class="opicw6a2l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:elasticsearch-wordmark"} {...others} />);
}

export default Component;
