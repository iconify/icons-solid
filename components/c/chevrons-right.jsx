import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4kyeqb6q.css';
import '../../css/x/xmhb8kgbl.css';
import '../../css/w/wsnj7ybey.css';
import '../../css/s/sbrtnw41k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k4kyeqb6q wm-a"/><path class="wm-a xmhb8kgbl"/><path class="wm-k wsnj7ybey"/><path class="sbrtnw41k wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chevrons-right"} {...others} />);
}

export default Component;
