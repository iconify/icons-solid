import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_1_eqb9t.css';
import '../../css/q/q02p0rb4d.css';
import '../../css/f/fwy8obcmv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n_1_eqb9t"/><path class="q02p0rb4d"/><path class="fwy8obcmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:office-20-bold"} {...others} />);
}

export default Component;
