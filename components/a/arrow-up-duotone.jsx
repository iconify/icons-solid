import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mj_-u5bwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mj_-u5bwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:arrow-up-duotone"} {...others} />);
}

export default Component;
