import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ahasjgtyt.css';
import '../../css/g/g-h71gcju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ahasjgtyt"/><path class="g-h71gcju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:tip-jar-euro"} {...others} />);
}

export default Component;
