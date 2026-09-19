import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/tkw1zoffe.css';
import '../../css/r/rnp50yozo.css';
import '../../css/u/u6d1zuhgm.css';
import '../../css/z/zt8n7mbzz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="tkw1zoffe"/><path class="rnp50yozo"/><path class="u6d1zuhgm"/><path class="zt8n7mbzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:icecream-five"} {...others} />);
}

export default Component;
