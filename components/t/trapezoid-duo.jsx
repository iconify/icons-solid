import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yk5p8su9s.css';
import '../../css/m/mxptukb2q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary yk5p8su9s"/><path class="mxptukb2q primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:trapezoid-duo"} {...others} />);
}

export default Component;
