import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/esdpq_hhl.css';
import '../../css/g/gbt4wjbiy.css';
import '../../css/k/kz957bcgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="esdpq_hhl"/><path class="gbt4wjbiy"/><path clip-rule="evenodd" class="kz957bcgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sparkle-scan"} {...others} />);
}

export default Component;
