import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sigwjym5j.css';
import '../../css/v/v3uxt4bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sigwjym5j"/><path class="v3uxt4bgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:virus-duocolor-round"} {...others} />);
}

export default Component;
