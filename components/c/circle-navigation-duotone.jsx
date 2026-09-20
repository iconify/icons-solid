import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lej-24q4i.css';
import '../../css/i/i9-7mpb_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lej-24q4i"/><path class="i9-7mpb_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-navigation-duotone"} {...others} />);
}

export default Component;
