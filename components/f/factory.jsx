import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxjl7h_2h.css';
import '../../css/p/puwnn8bma.css';
import '../../css/f/fsdyx0e6l.css';
import '../../css/y/ywhe_o_vn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bxjl7h_2h wm-k"/><path class="puwnn8bma wm-k"/><path class="fsdyx0e6l wm-a"/><path class="wm-k ywhe_o_vn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:factory"} {...others} />);
}

export default Component;
