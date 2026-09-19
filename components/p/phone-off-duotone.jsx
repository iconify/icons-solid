import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z96j-fa4p.css';
import '../../css/y/y5t09yewc.css';
import '../../css/n/n35dlibfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z96j-fa4p"/><path class="y5t09yewc"/><path class="n35dlibfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:phone-off-duotone"} {...others} />);
}

export default Component;
