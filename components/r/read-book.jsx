import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/p/pea8xwbap.css';
import '../../css/x/xx2ig22fa.css';
import '../../css/b/b6mu38bbk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="pea8xwbap"/><path class="xx2ig22fa"/><circle class="b6mu38bbk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:read-book"} {...others} />);
}

export default Component;
