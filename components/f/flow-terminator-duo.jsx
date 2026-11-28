import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kla4l8gus.css';
import '../../css/w/wd9q9w1ik.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kla4l8gus secondary"/><path class="primary wd9q9w1ik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flow-terminator-duo"} {...others} />);
}

export default Component;
