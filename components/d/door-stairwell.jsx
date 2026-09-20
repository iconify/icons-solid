import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o2nihmbmv.css';
import '../../css/s/st1umwzvm.css';
import '../../css/i/ittsvtybw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o2nihmbmv"/><path class="st1umwzvm"/><path class="ittsvtybw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:door-stairwell"} {...others} />);
}

export default Component;
