import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/l/lwka4hb5s.css';
import '../../css/j/jph5gubwo.css';
import '../../css/b/b62w8-blj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="lwka4hb5s"/><path class="jph5gubwo"/><circle class="b62w8-blj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:seat"} {...others} />);
}

export default Component;
