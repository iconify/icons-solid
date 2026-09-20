import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u8y_286sp.css';
import '../../css/b/ba0j365wv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u8y_286sp"/><path class="ba0j365wv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:message-square-dot-duotone"} {...others} />);
}

export default Component;
