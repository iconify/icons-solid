import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/mm_wv7bbg.css';
import '../../css/u/u6hybkbsh.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsJa0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsJa0)"><path class="mm_wv7bbg"/><circle class="u6hybkbsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ja"} {...others} />);
}

export default Component;
