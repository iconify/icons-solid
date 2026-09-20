import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bvy5pzboo.css';
import '../../css/q/qe946z0fw.css';
import '../../css/o/obbpokbyl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="bvy5pzboo"/><path class="qe946z0fw"/><path class="obbpokbyl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:landscape-setting"} {...others} />);
}

export default Component;
