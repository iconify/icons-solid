import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m-zq4813x.css';
import '../../css/t/tkxnu0_he.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m-zq4813x"/><path class="tkxnu0_he"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:pizza-off"} {...others} />);
}

export default Component;
