import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gshe_di8n.css';
import '../../css/s/s1q8lcb1s.css';
import '../../css/a/a0f9uobni.css';
import '../../css/p/pr0649d7i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gshe_di8n"/><path class="s1q8lcb1s"/><path class="a0f9uobni"/><path class="pr0649d7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:heart-eyes"} {...others} />);
}

export default Component;
