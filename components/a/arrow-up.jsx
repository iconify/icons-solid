import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/c/cqyq4mlhs.css';
import '../../css/r/rhi7qpbko.css';
import '../../css/r/rj_u9lbil.css';
import '../../css/s/sph30q-dz.css';
import '../../css/d/dx7iutb6u.css';
import '../../css/s/sh-bfimtx.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><g class="xyjtgccot"><path class="cqyq4mlhs"/><path class="rhi7qpbko"/><path class="rj_u9lbil"/></g><path class="sph30q-dz"/><path class="dx7iutb6u"/><path class="sh-bfimtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:arrow-up"} {...others} />);
}

export default Component;
