import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlr4lquzx.css';
import '../../css/v/vdsszm8qt.css';
import '../../css/f/fheposbhp.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="nlr4lquzx"/><path class="vdsszm8qt"/><path class="fheposbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:logo-instagram"} {...others} />);
}

export default Component;
