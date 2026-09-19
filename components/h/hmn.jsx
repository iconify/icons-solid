import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wj-7246uw.css';
import '../../css/p/pi2pr_bdx.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsHmn0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsHmn0)"><path class="wj-7246uw"/><path class="pi2pr_bdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:hmn"} {...others} />);
}

export default Component;
