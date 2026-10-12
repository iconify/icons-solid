import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/epwrnkb2q.css';
import '../../css/m/mdq-0gxeh.css';
import '../../css/s/sj_0pvbqv.css';
import '../../css/o/o_p-33vzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="epwrnkb2q"/><path class="mdq-0gxeh"/><rect class="sj_0pvbqv"/><path class="o_p-33vzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:gift"} {...others} />);
}

export default Component;
