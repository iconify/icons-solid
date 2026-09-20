import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ofx8ijbbv.css';
import '../../css/k/k681lac8y.css';
import '../../css/b/b91vmrwsf.css';
import '../../css/p/pw_a-5btr.css';
import '../../css/l/l_o1n-b6w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ofx8ijbbv"/><path class="k681lac8y"/><path class="b91vmrwsf"/><path class="pw_a-5btr"/><path class="l_o1n-b6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:flower-lotus"} {...others} />);
}

export default Component;
