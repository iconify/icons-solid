import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4x9_2bmr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w4x9_2bmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:skip-prev"} {...others} />);
}

export default Component;
