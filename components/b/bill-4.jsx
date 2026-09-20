import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jabd78b8m.css';
import '../../css/z/z7cup6bfa.css';
import '../../css/z/zdlrubb0k.css';
import '../../css/q/qa76e4pry.css';
import '../../css/d/dexk5557k.css';
import '../../css/u/upjzaacar.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jabd78b8m"/><path class="z7cup6bfa"/><path class="zdlrubb0k"/><path class="qa76e4pry"/><path class="dexk5557k"/><path class="upjzaacar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:bill-4"} {...others} />);
}

export default Component;
