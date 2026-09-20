import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/nl6i3qb2f.css';
import '../../css/e/ess6f3oak.css';
import '../../css/a/a98c3lbqv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="nl6i3qb2f"/><path class="ess6f3oak"/><path class="a98c3lbqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:panel-right-open-dashed-sharp-duotone"} {...others} />);
}

export default Component;
