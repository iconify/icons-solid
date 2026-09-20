import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uc32_2shk.css';
import '../../css/c/cfya0ubty.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uc32_2shk"/><path class="cfya0ubty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:arrows-switch-duotone"} {...others} />);
}

export default Component;
