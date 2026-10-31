import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qq6vgh4pm.css';
import '../../css/q/qtrx7mbhq.css';
import '../../css/v/vyj9pmbht.css';
import '../../css/v/vuuwxwbgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qq6vgh4pm wm-k"/><path class="qtrx7mbhq wm-a"/><path class="vyj9pmbht wm-a"/><path class="vuuwxwbgh wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:clipboard-list"} {...others} />);
}

export default Component;
