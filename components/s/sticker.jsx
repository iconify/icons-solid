import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l_1pw147n.css';
import '../../css/i/iuvffbbaz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l_1pw147n"/><path class="iuvffbbaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sticker"} {...others} />);
}

export default Component;
