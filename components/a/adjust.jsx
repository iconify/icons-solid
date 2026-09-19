import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdkkambso.css';
import '../../css/y/y97y8fbxi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vdkkambso"/><path class="y97y8fbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:adjust"} {...others} />);
}

export default Component;
