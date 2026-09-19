import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/m/mtuu6g8bm.css';
import '../../css/s/stf0rj2tw.css';
import '../../css/s/s3fefubqk.css';
import '../../css/i/ixlphob6i.css';
import '../../css/g/g4wru1bvy.css';
import '../../css/f/f3fe7zlbp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="mtuu6g8bm"/><path class="stf0rj2tw"/><path class="s3fefubqk"/><path class="ixlphob6i"/><path class="g4wru1bvy"/><path class="f3fe7zlbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:bottle-two"} {...others} />);
}

export default Component;
