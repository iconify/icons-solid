import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/e/ek8eycbfz.css';
import '../../css/b/b4q5icciq.css';
import '../../css/z/zbx2d_b7p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="ek8eycbfz"/><path class="b4q5icciq"/><path class="zbx2d_b7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:print"} {...others} />);
}

export default Component;
