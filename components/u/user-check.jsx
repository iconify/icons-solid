import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4tohbccz.css';
import '../../css/m/mcj8uxbod.css';
import '../../css/h/hksbzx4ix.css';
import '../../css/p/psynymb7d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b4tohbccz wm-k"/><path class="mcj8uxbod wm-k"/><path class="hksbzx4ix wm-s"/><path class="psynymb7d wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:user-check"} {...others} />);
}

export default Component;
