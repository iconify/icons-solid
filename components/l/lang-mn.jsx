import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/rtk8q6gfy.css';
import '../../css/l/ln4yvpsvz.css';
import '../../css/c/cibj5pwcl.css';
import '../../css/v/vys_-0pev.css';
import '../../css/x/x5uqssbhc.css';
import '../../css/v/va6nscz5s.css';
import '../../css/o/ohko7n3va.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="rtk8q6gfy"/><path class="ln4yvpsvz"/><g class="cibj5pwcl"><path class="vys_-0pev"/><circle class="x5uqssbhc"/><circle class="va6nscz5s"/><path class="ohko7n3va"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-mn"} {...others} />);
}

export default Component;
