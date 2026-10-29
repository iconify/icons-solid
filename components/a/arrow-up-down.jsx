import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/huyx0gevn.css';
import '../../css/l/lmzjhacao.css';
import '../../css/w/wqefnac-r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="huyx0gevn"/><path class="lmzjhacao"/><path class="wqefnac-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:arrow-up-down"} {...others} />);
}

export default Component;
