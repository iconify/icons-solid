import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q97ltfs3e.css';
import '../../css/x/xftx2_1wf.css';
import '../../css/s/s9-jbqb3w.css';
import '../../css/j/j192bwbjf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q97ltfs3e wm-k"/><path class="wm-a xftx2_1wf"/><path class="s9-jbqb3w wm-a"/><path class="j192bwbjf wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:target"} {...others} />);
}

export default Component;
