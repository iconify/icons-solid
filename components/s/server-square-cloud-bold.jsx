import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zbuqugbjd.css';
import '../../css/t/td5ambbwi.css';
import '../../css/h/hm_cqf57b.css';
import '../../css/m/m5vokcche.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zbuqugbjd"/><path clip-rule="evenodd" class="td5ambbwi"/><path clip-rule="evenodd" class="hm_cqf57b"/><path class="m5vokcche"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-square-cloud-bold"} {...others} />);
}

export default Component;
