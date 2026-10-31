import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qtkm2uepe.css';
import '../../css/k/k5f7qrboz.css';
import '../../css/o/oqf382uiz.css';
import '../../css/h/hbi8hhkfx.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="qtkm2uepe"/><path class="k5f7qrboz wm-shine"/><path class="oqf382uiz wm-k"/><path class="hbi8hhkfx wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:eye"} {...others} />);
}

export default Component;
