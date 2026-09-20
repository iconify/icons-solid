import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ea7fh4hco.css';
import '../../css/b/bubvahb-l.css';
import '../../css/m/mc35szfhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ea7fh4hco"/><path class="bubvahb-l"/><path class="mc35szfhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-academic-cap-2-broken"} {...others} />);
}

export default Component;
