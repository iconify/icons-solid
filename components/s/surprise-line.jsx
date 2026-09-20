import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmizg-b1r.css';
import '../../css/m/mf2faab1e.css';
import '../../css/m/m1bd3mb0c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mmizg-b1r"/><path class="mf2faab1e"/><path class="m1bd3mb0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:surprise-line"} {...others} />);
}

export default Component;
