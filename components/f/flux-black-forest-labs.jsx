import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx5d-bc1s.css';
import '../../css/b/boywt1bng.css';
import '../../css/r/rebbjcb_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nx5d-bc1s"><path class="boywt1bng"/><path class="rebbjcb_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:flux-black-forest-labs"} {...others} />);
}

export default Component;
