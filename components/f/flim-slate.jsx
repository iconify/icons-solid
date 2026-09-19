import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m77h6kjad.css';
import '../../css/d/dareue1ze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m77h6kjad"/><path class="dareue1ze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:flim-slate"} {...others} />);
}

export default Component;
