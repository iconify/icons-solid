import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cao70dwyo.css';
import '../../css/v/vna-3ubik.css';
import '../../css/d/d4ye35x9i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cao70dwyo"/><path class="vna-3ubik"/><path class="d4ye35x9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:copy-check"} {...others} />);
}

export default Component;
