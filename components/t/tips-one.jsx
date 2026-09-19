import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/h/hue8_ac7h.css';
import '../../css/d/d2d5prbig.css';
import '../../css/n/nrndtsbfd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="hue8_ac7h"/><path class="d2d5prbig"/><path class="nrndtsbfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tips-one"} {...others} />);
}

export default Component;
