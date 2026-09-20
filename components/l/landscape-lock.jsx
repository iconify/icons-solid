import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uhm_tz61o.css';
import '../../css/y/ypd3-cn5l.css';
import '../../css/e/eraj5km8c.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="uhm_tz61o"/><path class="ypd3-cn5l"/><path class="eraj5km8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:landscape-lock"} {...others} />);
}

export default Component;
