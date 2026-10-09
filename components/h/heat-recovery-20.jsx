import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re19_f2ye.css';
import '../../css/u/um6ozge3g.css';
import '../../css/r/rcnrracia.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="re19_f2ye"/><path class="um6ozge3g"/><path class="rcnrracia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-recovery-20"} {...others} />);
}

export default Component;
