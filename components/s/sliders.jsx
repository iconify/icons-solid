import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d43m7xz-l.css';
import '../../css/x/xf9s29b3q.css';
import '../../css/e/enuyxv0hd.css';
import '../../css/h/h03ww_9cz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d43m7xz-l wm-k"/><path class="wm-a xf9s29b3q"/><path class="enuyxv0hd wm-a"/><path class="h03ww_9cz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:sliders"} {...others} />);
}

export default Component;
