import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/b/b5mpx9hjg.css';
import '../../css/i/in3igcb8w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="b5mpx9hjg"/><path class="in3igcb8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:mail-send"} {...others} />);
}

export default Component;
