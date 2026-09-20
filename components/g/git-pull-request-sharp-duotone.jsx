import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/tvudebc2k.css';
import '../../css/p/pyjjdwn5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="tvudebc2k"/><path class="pyjjdwn5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-pull-request-sharp-duotone"} {...others} />);
}

export default Component;
