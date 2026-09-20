import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lf_1wbw7v.css';
import '../../css/e/e6o90zgnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lf_1wbw7v"/><path class="e6o90zgnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-left-to-arc"} {...others} />);
}

export default Component;
