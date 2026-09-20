import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kbc-a6ktx.css';
import '../../css/u/ua7r-degj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kbc-a6ktx"/><path class="ua7r-degj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-big-right-short-two-tone"} {...others} />);
}

export default Component;
