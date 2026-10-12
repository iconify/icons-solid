import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wo0c38buo.css';
import '../../css/c/ciwabiowf.css';
import '../../css/d/diidstw8n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wo0c38buo"/><path clip-rule="evenodd" class="ciwabiowf"/><path class="diidstw8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:galaxy-filled"} {...others} />);
}

export default Component;
