import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pycxs8orj.css';
import '../../css/z/zejh6zddn.css';
import '../../css/i/iun1bib_o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pycxs8orj"/><path class="zejh6zddn"/><path class="iun1bib_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:calendar-plus-48"} {...others} />);
}

export default Component;
