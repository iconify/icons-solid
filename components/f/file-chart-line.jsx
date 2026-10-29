import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qfl7jkbal.css';
import '../../css/u/u6--6taes.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qfl7jkbal"/><path class="u6--6taes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:file-chart-line"} {...others} />);
}

export default Component;
