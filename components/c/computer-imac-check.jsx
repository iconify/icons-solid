import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ow062hf4j.css';
import '../../css/v/vy3r78bjp.css';
import '../../css/n/najaevbea.css';
import '../../css/j/jed90wb7i.css';
import '../../css/t/twqjupqbh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ow062hf4j"/><path class="vy3r78bjp"/><path class="najaevbea"/><path class="jed90wb7i"/><path class="twqjupqbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:computer-imac-check"} {...others} />);
}

export default Component;
