import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/adsmbghfb.css';
import '../../css/t/tuubzrbrm.css';
import '../../css/n/nikgb_thu.css';
import '../../css/c/ckfoqpbve.css';
import '../../css/f/fxfqg2b5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="adsmbghfb"/><path class="tuubzrbrm"/><circle class="nikgb_thu"/><circle class="ckfoqpbve"/><path class="fxfqg2b5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:incognito"} {...others} />);
}

export default Component;
