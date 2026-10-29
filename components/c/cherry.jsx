import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/df6p8rh7a.css';
import '../../css/i/ijxzg4bdd.css';
import '../../css/m/md2eyrs9r.css';
import '../../css/b/byr4zob5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="df6p8rh7a wm-k"/><path class="ijxzg4bdd wm-a"/><path class="md2eyrs9r"/><path class="byr4zob5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cherry"} {...others} />);
}

export default Component;
