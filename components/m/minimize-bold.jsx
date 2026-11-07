import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-sogubpk.css';
import '../../css/k/kob3fcbmh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-sogubpk"/><path class="kob3fcbmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimize-bold"} {...others} />);
}

export default Component;
