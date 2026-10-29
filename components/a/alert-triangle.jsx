import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g962xhd_j.css';
import '../../css/s/syrsg1b7q.css';
import '../../css/b/bgzw4_2lq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g962xhd_j wm-k"/><path class="syrsg1b7q wm-k"/><path class="bgzw4_2lq wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:alert-triangle"} {...others} />);
}

export default Component;
