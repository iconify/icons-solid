import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/u/u4gjvmm-i.css';
import '../../css/w/wzezone-a.css';
import '../../css/h/hozl91a5a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="u4gjvmm-i"/><path class="wzezone-a"/><path class="hozl91a5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:collection-records"} {...others} />);
}

export default Component;
