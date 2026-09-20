import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/s9cfkhb6c.css';
import '../../css/e/egnwpk-rl.css';
import '../../css/f/f4nq9m38v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="s9cfkhb6c"/><path class="egnwpk-rl"/><path class="f4nq9m38v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:dollar-increase"} {...others} />);
}

export default Component;
