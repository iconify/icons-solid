import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q48gvtsqs.css';
import '../../css/s/sxun92beu.css';
import '../../css/p/ptdetsbsf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q48gvtsqs wm-k"/><path class="sxun92beu wm-k"/><path class="ptdetsbsf wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:plane-landing"} {...others} />);
}

export default Component;
