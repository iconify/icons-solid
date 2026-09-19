import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/y6_qflbqc.css';
import '../../css/a/al96yu44v.css';
import '../../css/y/ycelqpu_n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><circle class="y6_qflbqc"/><path class="al96yu44v"/><path class="ycelqpu_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:lock-one"} {...others} />);
}

export default Component;
