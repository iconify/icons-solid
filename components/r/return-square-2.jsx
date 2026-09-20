import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bhf41ngxf.css';
import '../../css/y/yo1w9kbza.css';
import '../../css/p/phsohubuh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="bhf41ngxf"/><path class="yo1w9kbza"/><path class="phsohubuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:return-square-2"} {...others} />);
}

export default Component;
