import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u1zt-pbat.css';
import '../../css/w/wo1u9yffx.css';
import '../../css/x/x6j3_gbti.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="u1zt-pbat"/><path class="wo1u9yffx"/><path class="x6j3_gbti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:landscape-view"} {...others} />);
}

export default Component;
