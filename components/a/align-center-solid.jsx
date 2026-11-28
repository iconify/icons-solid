import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igx07ub6e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="igx07ub6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:align-center-solid"} {...others} />);
}

export default Component;
