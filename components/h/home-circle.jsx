import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pou3q3wuy.css';
import '../../css/v/vj_fb8bop.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pou3q3wuy"/><path class="vj_fb8bop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:home-circle"} {...others} />);
}

export default Component;
