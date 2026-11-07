import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u5o71pbee.css';
import '../../css/e/e_lxlzbrz.css';
import '../../css/k/koqepsn2n.css';
import '../../css/d/dciv8jbgc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u5o71pbee"/><path class="e_lxlzbrz"/><path class="koqepsn2n"/><path class="dciv8jbgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suitcase-lines-bold-duotone"} {...others} />);
}

export default Component;
