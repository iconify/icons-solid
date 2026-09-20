import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k_-jwo.css';
import '../../css/y/ydovum.css';
import '../../css/b/b9qm4w.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-ssqjbr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k_-jwo ydovum"/><path class="b9qm4w ydovum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:chat-round-filled"} {...others} />);
}

export default Component;
