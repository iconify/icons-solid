import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qaz9ngb0m.css';
import '../../css/a/a5plrmo6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qaz9ngb0m"/><path class="a5plrmo6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:baby-2-girl-two-tone"} {...others} />);
}

export default Component;
