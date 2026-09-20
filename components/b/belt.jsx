import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fo6i0accw.css';
import '../../css/i/ivzhn2iii.css';
import '../../css/h/hzqonabkw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fo6i0accw"/><rect class="ivzhn2iii"/><path class="hzqonabkw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:belt"} {...others} />);
}

export default Component;
