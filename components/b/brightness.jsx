import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dznsu6bwv.css';
import '../../css/k/kzxe_sb3s.css';
import '../../css/t/t1rt3wbvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dznsu6bwv"/><path class="kzxe_sb3s"/><path class="t1rt3wbvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:brightness"} {...others} />);
}

export default Component;
