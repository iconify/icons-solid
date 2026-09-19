import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/l76t_z2em.css';
import '../../css/w/wffly8bci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="l76t_z2em"/><path class="wffly8bci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:magic-wand"} {...others} />);
}

export default Component;
