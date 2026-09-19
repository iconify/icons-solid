import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/y6_qflbqc.css';
import '../../css/v/vy-y_jjyw.css';
import '../../css/y/ycelqpu_n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><circle class="y6_qflbqc"/><path class="vy-y_jjyw"/><path class="ycelqpu_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:unlock-one"} {...others} />);
}

export default Component;
