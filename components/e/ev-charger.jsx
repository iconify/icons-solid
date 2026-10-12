import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q9m4wbabb.css';
import '../../css/g/gzuk2y92h.css';
import '../../css/s/soyhk2b0v.css';
import '../../css/g/ggi55vaju.css';
import '../../css/z/z66f1wbpe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q9m4wbabb"/><path class="gzuk2y92h"/><path class="soyhk2b0v"/><path class="ggi55vaju"/><rect class="z66f1wbpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ev-charger"} {...others} />);
}

export default Component;
