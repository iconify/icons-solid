import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ypycmib-u.css';
import '../../css/p/phke3yifm.css';
import '../../css/n/n6vrxw2xt.css';
import '../../css/p/pphr1gbcj.css';
import '../../css/i/ir5xpsbeu.css';
import '../../css/j/jwnwcttmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ypycmib-u"/><path class="phke3yifm"/><path class="n6vrxw2xt"/><path class="pphr1gbcj"/><path class="ir5xpsbeu"/><path class="jwnwcttmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:book-encyclopedia"} {...others} />);
}

export default Component;
