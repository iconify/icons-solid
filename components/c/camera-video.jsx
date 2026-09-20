import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/b/bhdfqnbsu.css';
import '../../css/k/k783hdbat.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="bhdfqnbsu"/><path class="k783hdbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:camera-video"} {...others} />);
}

export default Component;
