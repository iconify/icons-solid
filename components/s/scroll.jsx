import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u70z7c2zg.css';
import '../../css/n/nifwqobjv.css';
import '../../css/k/kdxi7weab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u70z7c2zg"/><path class="nifwqobjv"/><path class="kdxi7weab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:scroll"} {...others} />);
}

export default Component;
