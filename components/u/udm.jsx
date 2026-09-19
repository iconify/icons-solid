import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/a/ayrm58b3o.css';
import '../../css/m/mfzbs70ff.css';
import '../../css/n/n4cyhmbkq.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsUdm0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsUdm0)"><path class="ayrm58b3o"/><path class="mfzbs70ff"/><path class="n4cyhmbkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:udm"} {...others} />);
}

export default Component;
