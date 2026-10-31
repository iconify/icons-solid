import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/q-ckkssuv.css';
import '../../css/w/wvzk8ujng.css';
import '../../css/u/uylg6bcvj.css';
import '../../css/f/fd6pd66bu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="q-ckkssuv"/><path class="wm-shine wvzk8ujng"/><path class="uylg6bcvj wm-k"/><path class="fd6pd66bu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:notepad-text"} {...others} />);
}

export default Component;
