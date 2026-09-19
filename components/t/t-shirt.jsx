import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/a/aqapz463q.css';
import '../../css/c/cqtvnzb7g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="aqapz463q"/><path class="cqtvnzb7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:t-shirt"} {...others} />);
}

export default Component;
