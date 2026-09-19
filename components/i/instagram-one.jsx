import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly6jl_bkj.css';
import '../../css/a/aoabsmt9b.css';
import '../../css/f/fdw87rbat.css';
import '../../css/n/n9-l1jfhy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ly6jl_bkj"><circle class="aoabsmt9b"/><rect class="fdw87rbat"/><path class="n9-l1jfhy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:instagram-one"} {...others} />);
}

export default Component;
