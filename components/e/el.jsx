import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/e/e8yohmb3w.css';
import '../../css/m/me1_ckb-s.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsEl0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsEl0)"><path class="e8yohmb3w"/><path class="me1_ckb-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:el"} {...others} />);
}

export default Component;
