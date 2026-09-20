import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbm5cab-e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hbm5cab-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:keyboard-shift"} {...others} />);
}

export default Component;
