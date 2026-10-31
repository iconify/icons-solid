import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/bjsh7rmdv.css';
import '../../css/m/mrpjhzbvf.css';
import '../../css/k/kogpadc5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="bjsh7rmdv"/><path class="mrpjhzbvf wm-k"/><path class="kogpadc5i wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:git-graph"} {...others} />);
}

export default Component;
