import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rq8cixbfp.css';
import '../../css/f/fp3l73glm.css';
import '../../css/h/hqg92z8bm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rq8cixbfp"/><path clip-rule="evenodd" class="fp3l73glm"/><path class="hqg92z8bm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:university-filled"} {...others} />);
}

export default Component;
