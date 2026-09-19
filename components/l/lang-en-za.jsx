import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/i/ihbzjilqh.css';
import '../../css/g/gg-v_ymcg.css';
import '../../css/s/si2iccb6i.css';
import '../../css/y/yvjv1pirb.css';
import '../../css/x/xsx3r80om.css';
import '../../css/e/eavnu68zi.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="ihbzjilqh"/><path class="gg-v_ymcg"/><path class="si2iccb6i"/><path class="yvjv1pirb"/><path class="xsx3r80om"/><path class="eavnu68zi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-en-za"} {...others} />);
}

export default Component;
