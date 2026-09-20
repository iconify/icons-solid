import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pc44scclm.css';
import '../../css/b/b5-0whvlg.css';
import '../../css/j/jkh-81bok.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="pc44scclm"/><path class="b5-0whvlg"/><path class="jkh-81bok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:earbuds-sharp-duotone"} {...others} />);
}

export default Component;
