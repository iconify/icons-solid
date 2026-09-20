import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lqvennbmd.css';
import '../../css/g/g4--9fbfr.css';
import '../../css/s/sq052614m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="lqvennbmd"/><path class="g4--9fbfr"/><path class="sq052614m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:spotify"} {...others} />);
}

export default Component;
