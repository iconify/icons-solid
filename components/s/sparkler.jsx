import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sunfusurj.css';
import '../../css/z/z04drlb1l.css';
import '../../css/j/j-npdpb0r.css';
import '../../css/m/mxrf0ubcr.css';
import '../../css/z/znyn_e9eo.css';
import '../../css/v/vd4h7ibxq.css';
import '../../css/r/rmej-qbjq.css';
import '../../css/a/aucbuf_wy.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGI3jEVrAl" class="sunfusurj"/></defs><g class="z04drlb1l"><use href="#SVGI3jEVrAl" class="j-npdpb0r"/><path class="mxrf0ubcr"/></g><path class="znyn_e9eo"/><g class="vd4h7ibxq"><use href="#SVGI3jEVrAl" class="j-npdpb0r"/><path class="rmej-qbjq"/></g><path class="aucbuf_wy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sparkler"} {...others} />);
}

export default Component;
