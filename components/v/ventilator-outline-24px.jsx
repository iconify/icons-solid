import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hcwqt1boa.css';
import '../../css/q/qw94g-6ki.css';
import '../../css/m/mr5dngbcl.css';
import '../../css/h/hliflxb2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hcwqt1boa"/><path class="qw94g-6ki"/><path clip-rule="evenodd" class="mr5dngbcl"/><path class="hliflxb2s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ventilator-outline-24px"} {...others} />);
}

export default Component;
