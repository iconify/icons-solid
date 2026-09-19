import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekamw6x8t.css';
import '../../css/p/pc_jj8btf.css';
import '../../css/v/v_2jvdpvu.css';
import '../../css/f/fac6njuzs.css';

const viewBox = {"width":300,"height":200};
const content = `<g class="ft5dv1b6b"><path class="ekamw6x8t"/><path class="pc_jj8btf"/><circle class="v_2jvdpvu"/><path class="fac6njuzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:tw"} {...others} />);
}

export default Component;
