import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhc8oxb3l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dhc8oxb3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:phone-call-clock"} {...others} />);
}

export default Component;
