import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n4mac9bsu.css';
import '../../css/n/n1wuunt1w.css';
import '../../css/y/yezgepoza.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(135 12.06 8.92)" class="n4mac9bsu"/><circle transform="rotate(135 12.06 8.92)" class="n1wuunt1w"/><path class="yezgepoza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:female"} {...others} />);
}

export default Component;
