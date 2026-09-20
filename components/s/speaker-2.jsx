import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tu6vefbia.css';
import '../../css/d/dlskuvbjf.css';
import '../../css/s/s041z_1vw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="tu6vefbia"/><path class="dlskuvbjf"/><path class="s041z_1vw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:speaker-2"} {...others} />);
}

export default Component;
