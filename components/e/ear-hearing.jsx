import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k7c-e9bvf.css';
import '../../css/n/nzec2cctc.css';
import '../../css/b/bq6qtbbyc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="k7c-e9bvf"/><path class="nzec2cctc"/><path class="bq6qtbbyc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ear-hearing"} {...others} />);
}

export default Component;
