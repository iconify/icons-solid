import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nq7kavbaa.css';
import '../../css/t/tk37vwbag.css';
import '../../css/q/qtctpdfrf.css';
import '../../css/x/x_acth80j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="nq7kavbaa wm-shadow"/><path class="tk37vwbag wm-shadow"/><path class="qtctpdfrf"/><path class="x_acth80j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:crown"} {...others} />);
}

export default Component;
