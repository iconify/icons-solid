import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/azmrzvbjh.css';
import '../../css/q/qr4j1acqm.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="azmrzvbjh"/><path class="qr4j1acqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:poe"} {...others} />);
}

export default Component;
