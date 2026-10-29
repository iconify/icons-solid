import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r70as0kbg.css';
import '../../css/x/xgs8ztb6h.css';
import '../../css/u/uru7yvq_c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r70as0kbg wm-k"/><path class="wm-a xgs8ztb6h"/><path class="uru7yvq_c wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:italic"} {...others} />);
}

export default Component;
