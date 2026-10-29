import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6pes-bxs.css';
import '../../css/h/hknnmqaty.css';
import '../../css/p/pj25m4b3c.css';
import '../../css/s/sp8nadr0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j6pes-bxs wm-k"/><path class="hknnmqaty wm-k"/><path class="pj25m4b3c wm-k"/><path class="sp8nadr0y wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:hard-drive"} {...others} />);
}

export default Component;
