import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f4aw46bgq.css';
import '../../css/h/hgfmg5bxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f4aw46bgq"/><path class="hgfmg5bxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:message-two-tone"} {...others} />);
}

export default Component;
