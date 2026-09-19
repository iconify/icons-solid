import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/b8tqzsb4n.css';
import '../../css/v/v_8w1n7-q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="b8tqzsb4n"/><path class="v_8w1n7-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:voice-input"} {...others} />);
}

export default Component;
