import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vx17i_97r.css';
import '../../css/r/rnza0sb-x.css';
import '../../css/k/ke-2t-fwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vx17i_97r wm-a"/><path class="rnza0sb-x wm-k"/><path class="ke-2t-fwz wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:paintbrush"} {...others} />);
}

export default Component;
