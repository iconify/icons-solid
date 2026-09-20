import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l4l2bivlj.css';
import '../../css/f/fuzt8obdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="l4l2bivlj"/><path class="fuzt8obdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:headset-sharp-fill"} {...others} />);
}

export default Component;
