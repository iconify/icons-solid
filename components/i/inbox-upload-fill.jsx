import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv1wf3b6f.css';
import '../../css/g/gwcvmlj-e.css';
import '../../css/q/q_y0g-4dq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sv1wf3b6f"/><path class="gwcvmlj-e"/><path class="q_y0g-4dq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:inbox-upload-fill"} {...others} />);
}

export default Component;
