import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/h/hrq90hfel.css';
import '../../css/s/sn6x_tbwe.css';
import '../../css/y/yqs7h4c2a.css';
import '../../css/o/oge5xob3v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><circle class="hrq90hfel"/><path class="sn6x_tbwe"/><path class="yqs7h4c2a"/><path class="oge5xob3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:jewelry"} {...others} />);
}

export default Component;
