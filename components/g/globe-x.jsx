import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hup412r_w.css';
import '../../css/c/cbs6mppya.css';
import '../../css/q/qq0rg2b7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 11.99 11.99)" class="hup412r_w"/><path class="cbs6mppya"/><path class="qq0rg2b7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:globe-x"} {...others} />);
}

export default Component;
