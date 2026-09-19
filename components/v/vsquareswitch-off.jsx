import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vvdrwqbxp.css';
import '../../css/x/x1okklbox.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="vvdrwqbxp"/><path class="x1okklbox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:vsquareswitch-off"} {...others} />);
}

export default Component;
