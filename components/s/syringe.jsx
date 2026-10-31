import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/z7bbc9kan.css';
import '../../css/m/m96ghobxa.css';
import '../../css/a/av8o6bynl.css';
import '../../css/j/jein5vgbr.css';
import '../../css/s/s1vtn9bnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="z7bbc9kan"/><path class="m96ghobxa wm-shine"/><path class="av8o6bynl wm-k"/><path class="jein5vgbr wm-a"/><path class="s1vtn9bnk wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:syringe"} {...others} />);
}

export default Component;
