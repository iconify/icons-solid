import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b896dj8wk.css';
import '../../css/o/o78nfacdg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b896dj8wk"/><path class="o78nfacdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-3-duocolor-round"} {...others} />);
}

export default Component;
