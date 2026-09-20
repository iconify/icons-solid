import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/r/r1mdtod-s.css';
import '../../css/v/vq3snsbdj.css';
import '../../css/k/kj3_rlb2o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="r1mdtod-s"/><path class="vq3snsbdj"/><path class="kj3_rlb2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:rss-square"} {...others} />);
}

export default Component;
