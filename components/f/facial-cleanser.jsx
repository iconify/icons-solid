import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/tn0h24bih.css';
import '../../css/t/ti1fmsbsz.css';
import '../../css/h/h8xgiibmi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="tn0h24bih"/><path class="ti1fmsbsz"/><path class="h8xgiibmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:facial-cleanser"} {...others} />);
}

export default Component;
