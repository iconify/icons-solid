import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prsaaacnj.css';
import '../../css/x/xvgir7w9l.css';
import '../../css/r/r84512iun.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="prsaaacnj wm-k"/><path class="wm-k xvgir7w9l"/><path class="r84512iun wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:scroll-text"} {...others} />);
}

export default Component;
