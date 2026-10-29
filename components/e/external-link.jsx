import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fiwl87o0z.css';
import '../../css/t/tuc29nb8n.css';
import '../../css/c/ci3zysb2d.css';
import '../../css/n/news1hu4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fiwl87o0z wm-k"/><path class="tuc29nb8n wm-k"/><path class="ci3zysb2d wm-a"/><path class="news1hu4g wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:external-link"} {...others} />);
}

export default Component;
