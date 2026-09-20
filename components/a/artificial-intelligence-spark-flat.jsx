import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k74zmrt5z.css';
import '../../css/v/v54ddhb6a.css';
import '../../css/x/xjxlwd61i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k74zmrt5z"/><path class="v54ddhb6a"/><path clip-rule="evenodd" class="xjxlwd61i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:artificial-intelligence-spark-flat"} {...others} />);
}

export default Component;
