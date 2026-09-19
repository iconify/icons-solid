import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flkqk9ded.css';
import '../../css/l/lj3jycc9m.css';
import '../../css/n/n1kqxqblq.css';
import '../../css/r/r00q4lbzd.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="flkqk9ded"/><path class="lj3jycc9m"/><path class="n1kqxqblq"/><path class="r00q4lbzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:gm"} {...others} />);
}

export default Component;
