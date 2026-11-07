import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j0hg5zjjc.css';
import '../../css/p/pay9z-wai.css';
import '../../css/c/c95pdnnug.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j0hg5zjjc"/><path class="pay9z-wai"/><path clip-rule="evenodd" class="c95pdnnug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flashlight-bold"} {...others} />);
}

export default Component;
