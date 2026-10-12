import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bnsivobku.css';
import '../../css/i/iiq6_l6ux.css';
import '../../css/k/kmlggrbtv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bnsivobku"/><path class="iiq6_l6ux"/><path class="kmlggrbtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:square-cursor"} {...others} />);
}

export default Component;
