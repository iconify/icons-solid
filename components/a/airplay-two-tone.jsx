import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/umw-n-b3y.css';
import '../../css/a/asv-ulbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="umw-n-b3y"/><path class="asv-ulbqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:airplay-two-tone"} {...others} />);
}

export default Component;
