import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ppl_-uorl.css';
import '../../css/u/uso6srbxz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ppl_-uorl"/><path class="uso6srbxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bee-48"} {...others} />);
}

export default Component;
