import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kz7v_hriw.css';
import '../../css/o/ok56wpbuh.css';
import '../../css/f/fsnrxv-br.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kz7v_hriw"/><path class="ok56wpbuh"/><path class="fsnrxv-br"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:heart-break"} {...others} />);
}

export default Component;
