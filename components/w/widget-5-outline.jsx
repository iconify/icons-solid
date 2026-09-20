import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n968dob1h.css';
import '../../css/c/cuivapbyy.css';
import '../../css/o/o660_cccg.css';
import '../../css/f/fenrj7bdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n968dob1h"/><path class="cuivapbyy"/><path class="o660_cccg"/><path class="fenrj7bdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:widget-5-outline"} {...others} />);
}

export default Component;
