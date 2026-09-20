import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e3m98dbwi.css';
import '../../css/a/adqqsio1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e3m98dbwi"/><path class="adqqsio1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:settings-duotone"} {...others} />);
}

export default Component;
