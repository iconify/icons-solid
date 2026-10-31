import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/d/dnyzfh5ly.css';
import '../../css/e/ehvc08b_v.css';
import '../../css/z/z8hr5m3_r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path class="dnyzfh5ly"/><path class="ehvc08b_v"/><path class="z8hr5m3_r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:bank-pop"} {...others} />);
}

export default Component;
