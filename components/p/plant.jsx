import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nkgpzvb0p.css';
import '../../css/p/phamcqwhm.css';
import '../../css/k/k9zg1xb2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nkgpzvb0p"/><path class="phamcqwhm"/><path class="k9zg1xb2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:plant"} {...others} />);
}

export default Component;
