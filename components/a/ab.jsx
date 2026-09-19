import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/e/eidp5qb7q.css';
import '../../css/u/um5hc2wws.css';
import '../../css/t/t_titybhs.css';
import '../../css/l/lp3lfdcfb.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="circleFlagsAb0"><circle class="bc1fd0lxe"/></mask><g mask="url(#circleFlagsAb0)"><path class="eidp5qb7q"/><path class="um5hc2wws"/><path class="t_titybhs"/><path class="lp3lfdcfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:ab"} {...others} />);
}

export default Component;
