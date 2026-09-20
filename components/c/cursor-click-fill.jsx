import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k3ykdccym.css';
import '../../css/m/mgrhl1bss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k3ykdccym"/><path class="mgrhl1bss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cursor-click-fill"} {...others} />);
}

export default Component;
