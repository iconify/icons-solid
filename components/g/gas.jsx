import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/u/u-8kx8qao.css';
import '../../css/t/t2t87mb4v.css';
import '../../css/c/c93p4rrcu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="u-8kx8qao"/><path class="t2t87mb4v"/><path class="c93p4rrcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:gas"} {...others} />);
}

export default Component;
