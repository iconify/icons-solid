import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v5mpafm6p.css';
import '../../css/n/nt-hnbm2v.css';
import '../../css/l/l487h0b9t.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v5mpafm6p"/><path class="nt-hnbm2v"/><path class="l487h0b9t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layout-freeform-outline"} {...others} />);
}

export default Component;
