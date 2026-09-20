import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fa7nocbur.css';
import '../../css/p/p39k-2awn.css';
import '../../css/s/sy-bnbbuw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fa7nocbur"/><path class="p39k-2awn"/><path class="sy-bnbbuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:image-search"} {...others} />);
}

export default Component;
