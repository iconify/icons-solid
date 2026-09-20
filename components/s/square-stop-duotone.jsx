import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u4yt2i7xs.css';
import '../../css/h/htcgw4bju.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u4yt2i7xs"/><path class="htcgw4bju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-stop-duotone"} {...others} />);
}

export default Component;
