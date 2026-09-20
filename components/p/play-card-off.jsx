import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fd6id9bay.css';
import '../../css/k/k_isfnbfj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fd6id9bay"/><path class="k_isfnbfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:play-card-off"} {...others} />);
}

export default Component;
