import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gch0n6b-r.css';
import '../../css/t/tb_a-gbkx.css';
import '../../css/w/w5k106bze.css';
import '../../css/k/ki3dpumog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gch0n6b-r"/><path class="tb_a-gbkx"/><path class="w5k106bze"/><path class="ki3dpumog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:bank-1"} {...others} />);
}

export default Component;
