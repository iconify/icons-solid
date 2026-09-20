import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/l/l5yjw9b8s.css';
import '../../css/y/ytx3gfbap.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="l5yjw9b8s"/><path class="ytx3gfbap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:smiley-indiferent"} {...others} />);
}

export default Component;
