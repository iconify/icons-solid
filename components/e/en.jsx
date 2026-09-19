import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/b/bgsd25l1y.css';
import '../../css/z/zdklvc37u.css';
import '../../css/d/drmk0woyt.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsEn0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsEn0)"><path class="bgsd25l1y"/><path class="zdklvc37u"/><path class="drmk0woyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:en"} {...others} />);
}

export default Component;
