import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctw6q0b8o.css';
import '../../css/t/t9ct0qbqu.css';
import '../../css/z/zgqctgb3e.css';
import '../../css/z/z2vwp3pcc.css';
import '../../css/b/bdudq8bva.css';
import '../../css/n/nsr8pjb6l.css';
import '../../css/w/wdzq85bfv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ctw6q0b8o wm-shadow"/><path class="t9ct0qbqu"/><path class="zgqctgb3e"/><path class="z2vwp3pcc"/><path class="bdudq8bva"/><path class="nsr8pjb6l wm-shine"/><path class="wdzq85bfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:audio-waveform"} {...others} />);
}

export default Component;
