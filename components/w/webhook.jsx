import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/h/hdl2klvgu.css';
import '../../css/b/bu5nfh-nk.css';
import '../../css/f/fft4yz3uq.css';
import '../../css/b/b2qohnadj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="hdl2klvgu"/><path class="bu5nfh-nk wm-k"/><path class="fft4yz3uq wm-a"/><path class="b2qohnadj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:webhook"} {...others} />);
}

export default Component;
