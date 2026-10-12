import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xecyk8bbz.css';
import '../../css/z/zgvyetbib.css';
import '../../css/c/cvjwbizuu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xecyk8bbz"/><path class="zgvyetbib"/><path class="cvjwbizuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:warning-triangle"} {...others} />);
}

export default Component;
