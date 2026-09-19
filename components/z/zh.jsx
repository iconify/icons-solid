import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/wj-7246uw.css';
import '../../css/n/n6_r6fbmw.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsZh0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsZh0)"><path class="wj-7246uw"/><path class="n6_r6fbmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:zh"} {...others} />);
}

export default Component;
