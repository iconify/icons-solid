import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gu9thsrhq.css';
import '../../css/n/n6jaqi5-t.css';
import '../../css/k/k9dbl-bro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gu9thsrhq"/><path class="n6jaqi5-t"/><path class="k9dbl-bro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:gift-card"} {...others} />);
}

export default Component;
