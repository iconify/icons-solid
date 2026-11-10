import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/c/c50zoybkb.css';
import '../../css/m/mdnhgeb6a.css';
import '../../css/x/xe8wi4bvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="c50zoybkb"/><path class="mdnhgeb6a"/><path class="xe8wi4bvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:heart-pulse"} {...others} />);
}

export default Component;
