import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dnbuw2_kl.css';
import '../../css/g/gqqmwfb0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dnbuw2_kl"/><path class="gqqmwfb0v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:phone-circle"} {...others} />);
}

export default Component;
