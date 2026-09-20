import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vb7n012lj.css';
import '../../css/b/btio96l9r.css';
import '../../css/n/nddx8oj7d.css';
import '../../css/j/j-c75gbby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vb7n012lj"/><path class="btio96l9r"/><path class="nddx8oj7d"/><path class="j-c75gbby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:brand-dribbble"} {...others} />);
}

export default Component;
