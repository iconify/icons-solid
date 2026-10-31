import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/peqw2v4yq.css';
import '../../css/l/lwwq5jbxt.css';
import '../../css/o/oc3xhs8uk.css';
import '../../css/s/sm00ukm5a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="peqw2v4yq wm-shadow"/><path class="lwwq5jbxt wm-shadow"/><path class="oc3xhs8uk"/><path class="sm00ukm5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:arrow-up"} {...others} />);
}

export default Component;
