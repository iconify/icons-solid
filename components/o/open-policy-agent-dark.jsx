import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/x/x-ms1wbzb.css';
import '../../css/c/ch56ih_vk.css';
import '../../css/n/nt7fptbcj.css';

const viewBox = {"width":395.51,"height":435.76,"left":16.62,"top":-1.63};
const content = `<g class="n1mjunbsu"><path class="x-ms1wbzb"/><path class="ch56ih_vk"/><path class="nt7fptbcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:open-policy-agent-dark"} {...others} />);
}

export default Component;
