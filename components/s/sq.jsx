import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wj-7246uw.css';
import '../../css/a/aev8zfb-s.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsSq0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsSq0)"><path class="wj-7246uw"/><path class="aev8zfb-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:sq"} {...others} />);
}

export default Component;
