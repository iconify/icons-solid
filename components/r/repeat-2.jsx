import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a5h1hycer.css';
import '../../css/m/mnfi-r6xl.css';
import '../../css/z/ze_zgdbna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a5h1hycer"/><path class="mnfi-r6xl"/><path class="ze_zgdbna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:repeat-2"} {...others} />);
}

export default Component;
