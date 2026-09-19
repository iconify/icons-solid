import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b-396ydgx.css';
import '../../css/o/oa8odlbac.css';
import '../../css/t/tqvdlybjq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><circle class="b-396ydgx"/><path class="oa8odlbac"/><path class="tqvdlybjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mirror-one"} {...others} />);
}

export default Component;
