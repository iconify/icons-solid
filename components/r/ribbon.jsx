import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bxu-zvbux.css';
import '../../css/l/ly8wnrbrd.css';
import '../../css/h/ha152abug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bxu-zvbux"/><path class="ly8wnrbrd"/><path class="ha152abug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:ribbon"} {...others} />);
}

export default Component;
