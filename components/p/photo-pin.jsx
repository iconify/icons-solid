import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k50zonbqn.css';
import '../../css/j/j--gz1axz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k50zonbqn"/><path class="j--gz1axz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-pin"} {...others} />);
}

export default Component;
