import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwhaectuo.css';
import '../../css/n/n63uy_v8q.css';
import '../../css/l/lwxbotvsb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dwhaectuo"/><path class="n63uy_v8q"/><path class="lwxbotvsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:vide-document-avi"} {...others} />);
}

export default Component;
