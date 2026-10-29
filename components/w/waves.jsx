import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-9_53bsu.css';
import '../../css/g/ganpu8bpr.css';
import '../../css/n/ntmuqq9ik.css';
import '../../css/a/alpw29bsk.css';
import '../../css/v/vc6wkob8o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-9_53bsu wm-shadow"/><path class="ganpu8bpr wm-k"/><path class="ntmuqq9ik wm-k"/><path class="alpw29bsk wm-a"/><path class="vc6wkob8o wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:waves"} {...others} />);
}

export default Component;
