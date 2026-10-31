import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/ptq85obuz.css';
import '../../css/v/vjaxozbzk.css';
import '../../css/m/m2ebxhp-u.css';
import '../../css/t/twmpeobxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ptq85obuz"/><path class="vjaxozbzk wm-shine"/><path class="m2ebxhp-u wm-k"/><path class="twmpeobxq wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:cloud-download"} {...others} />);
}

export default Component;
