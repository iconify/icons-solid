import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u92x10bie.css';
import '../../css/z/za30q9tjd.css';
import '../../css/c/c0fl3acsx.css';
import '../../css/q/q8-bv26ph.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="u92x10bie"/><path class="za30q9tjd"/><path class="c0fl3acsx"/><path class="q8-bv26ph"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:location-heart-pin"} {...others} />);
}

export default Component;
