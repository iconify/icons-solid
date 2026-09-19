import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a1ag6vmcj.css';
import '../../css/h/h7nduwp1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pie-chart-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="a1ag6vmcj"/><path class="h7nduwp1f"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:pie-chart-outline"} {...others} />);
}

export default Component;
