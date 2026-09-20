import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yl1padfwm.css';
import '../../css/j/j2w1i02yo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yl1padfwm"/><path class="j2w1i02yo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:exclamation-triangle-duotone"} {...others} />);
}

export default Component;
