import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/l/l7zjl-bdf.css';
import '../../css/y/yq8kh-3si.css';
import '../../css/k/khoc-wt5s.css';
import '../../css/m/m3mjobbnn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="pr52f_b5y"><path class="l7zjl-bdf"/><path class="yq8kh-3si"/><path class="khoc-wt5s"/><path class="m3mjobbnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:business-user-curriculum"} {...others} />);
}

export default Component;
