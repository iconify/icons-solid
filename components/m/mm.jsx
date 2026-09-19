import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/etowl0b4w.css';
import '../../css/z/z0qa8bb7g.css';
import '../../css/r/r8biox0bn.css';
import '../../css/r/rej7w7gqi.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="etowl0b4w"/><path class="z0qa8bb7g"/><path class="r8biox0bn"/><path class="rej7w7gqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:mm"} {...others} />);
}

export default Component;
