import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/utonhxb3c.css';
import '../../css/u/utkzf4pxe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="utonhxb3c"/><path class="utkzf4pxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:magnetic"} {...others} />);
}

export default Component;
