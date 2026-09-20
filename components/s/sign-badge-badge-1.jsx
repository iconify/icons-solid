import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fucf451kl.css';
import '../../css/g/g6imp1byx.css';
import '../../css/s/s-e5ewb3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fucf451kl"/><path class="g6imp1byx"/><path class="s-e5ewb3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:sign-badge-badge-1"} {...others} />);
}

export default Component;
