import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6wh1i9-p.css';
import '../../css/l/l826__b-v.css';
import '../../css/f/fp_-4-bgw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="w6wh1i9-p"/><path class="l826__b-v"/><path class="fp_-4-bgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:humidity-none"} {...others} />);
}

export default Component;
