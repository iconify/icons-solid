import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lx_4egb4z.css';
import '../../css/j/js4r_ppcw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lx_4egb4z"/><path class="js4r_ppcw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:shirt-t"} {...others} />);
}

export default Component;
