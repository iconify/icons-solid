import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i3jo4db_f.css';
import '../../css/c/cdrjiw5-p.css';
import '../../css/p/p11u22bqk.css';
import '../../css/t/tb6yzhyny.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="i3jo4db_f"/><rect class="cdrjiw5-p"/><path class="p11u22bqk"/><path class="tb6yzhyny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:crown"} {...others} />);
}

export default Component;
