import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/npnjj3bqi.css';
import '../../css/l/laen_wd4e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="npnjj3bqi"/><path class="laen_wd4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:circle-top-up-outline"} {...others} />);
}

export default Component;
