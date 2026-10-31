import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pu51xlbah.css';
import '../../css/f/f7e0yac4b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pu51xlbah"/><path class="f7e0yac4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:gitlab-duocolor-round"} {...others} />);
}

export default Component;
