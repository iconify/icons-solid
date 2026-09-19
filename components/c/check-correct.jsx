import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/b1xcyxb7w.css';
import '../../css/m/m594zc8-q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="b1xcyxb7w"/><path class="m594zc8-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:check-correct"} {...others} />);
}

export default Component;
