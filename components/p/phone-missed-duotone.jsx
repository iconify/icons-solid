import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n802joiny.css';
import '../../css/a/a6s4ubbfu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n802joiny"/><path class="a6s4ubbfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:phone-missed-duotone"} {...others} />);
}

export default Component;
