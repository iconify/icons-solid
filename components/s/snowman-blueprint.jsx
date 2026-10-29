import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e1eklgbft.css';
import '../../css/k/ktg4o2cns.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/y/yjfty0b5w.css';
import '../../css/t/tpu494b1c.css';
import '../../css/c/cm-n11bue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="e1eklgbft wm-deco"/><path class="ktg4o2cns wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="wm-k yjfty0b5w"/><path class="tpu494b1c wm-a"/><path class="cm-n11bue wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:snowman-blueprint"} {...others} />);
}

export default Component;
