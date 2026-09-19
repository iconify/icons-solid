import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/c/cbim_vtrq.css';
import '../../css/y/ytiz7kbua.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsIg0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsIg0)"><path class="cbim_vtrq"/><path class="ytiz7kbua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ig"} {...others} />);
}

export default Component;
