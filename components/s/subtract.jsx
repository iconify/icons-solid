import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxvajo8gq.css';
import '../../css/f/fun3axblo.css';
import '../../css/i/idq2opbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oxvajo8gq"/><rect class="fun3axblo"/><path class="idq2opbvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:subtract"} {...others} />);
}

export default Component;
