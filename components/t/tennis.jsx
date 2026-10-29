import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nurbkge2f.css';
import '../../css/h/hbh4leb5n.css';
import '../../css/k/k9cs5b8pr.css';
import '../../css/e/eh5ptc7tg.css';
import '../../css/t/tona-pq9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nurbkge2f wm-k"/><path class="hbh4leb5n wm-a"/><path class="k9cs5b8pr wm-a"/><path class="eh5ptc7tg wm-a"/><path class="tona-pq9i wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:tennis"} {...others} />);
}

export default Component;
