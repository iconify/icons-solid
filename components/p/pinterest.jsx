import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cpuequbzk.css';
import '../../css/u/uqmdkhkag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="cpuequbzk"/><path class="uqmdkhkag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:pinterest"} {...others} />);
}

export default Component;
