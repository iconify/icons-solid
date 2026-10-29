import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhoobpq9t.css';
import '../../css/f/ft2zb-bqy.css';
import '../../css/d/dj6rm_b0m.css';
import '../../css/x/x92iww81k.css';
import '../../css/o/owde3tbbg.css';
import '../../css/i/i19m3yb6m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mhoobpq9t wm-a"/><path class="ft2zb-bqy wm-a"/><path class="dj6rm_b0m wm-a"/><path class="wm-k x92iww81k"/><path class="owde3tbbg wm-k"/><path class="i19m3yb6m wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:coins"} {...others} />);
}

export default Component;
