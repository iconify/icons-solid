import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/h/hue8_ac7h.css';
import '../../css/e/edk7b4b6l.css';
import '../../css/q/qrlbkodzq.css';
import '../../css/y/yhlb3kzkn.css';
import '../../css/o/o6fhmkbcm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="hue8_ac7h"/><path class="edk7b4b6l"/><path class="qrlbkodzq"/><path class="yhlb3kzkn"/><path class="o6fhmkbcm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:topic-discussion"} {...others} />);
}

export default Component;
