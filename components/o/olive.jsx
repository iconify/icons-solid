import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yndlskbfr.css';
import '../../css/r/ry_xc3chb.css';
import '../../css/j/j4b8r1zra.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yndlskbfr"/><ellipse class="ry_xc3chb"/><path class="j4b8r1zra"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:olive"} {...others} />);
}

export default Component;
