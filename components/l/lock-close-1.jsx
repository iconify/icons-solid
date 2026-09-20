import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0xy8lb3x.css';
import '../../css/m/mtlp8goyw.css';
import '../../css/z/zmexo7e_i.css';
import '../../css/r/rye58inxk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f0xy8lb3x"/><path class="mtlp8goyw"/><path class="zmexo7e_i"/><path class="rye58inxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:lock-close-1"} {...others} />);
}

export default Component;
