import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sxalv7b1j.css';
import '../../css/k/k4w6yu4dg.css';
import '../../css/o/o5cxoybka.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sxalv7b1j"/><path class="k4w6yu4dg"/><path class="o5cxoybka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:alarm-bold"} {...others} />);
}

export default Component;
