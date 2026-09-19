import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/h/hue8_ac7h.css';
import '../../css/t/t6hpowrjp.css';
import '../../css/t/tigqmpb-w.css';
import '../../css/d/domo4ufmk.css';
import '../../css/y/y0nlbtb9s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="hue8_ac7h"/><path class="t6hpowrjp"/><path class="tigqmpb-w"/><path class="domo4ufmk"/><path class="y0nlbtb9s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:online-meeting"} {...others} />);
}

export default Component;
