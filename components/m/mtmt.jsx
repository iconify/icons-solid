import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrck--npu.css';
import '../../css/a/a3kaa3-qw.css';
import '../../css/f/fhtwuabpl.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="mrck--npu"><path class="a3kaa3-qw"/><path class="fhtwuabpl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:mtmt"} {...others} />);
}

export default Component;
