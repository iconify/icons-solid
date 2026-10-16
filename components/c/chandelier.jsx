import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cxmyj8bgd.css';
import '../../css/s/s1b-nrbws.css';
import '../../css/r/ra7dc2bic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cxmyj8bgd"/><path class="s1b-nrbws"/><path class="ra7dc2bic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chandelier"} {...others} />);
}

export default Component;
