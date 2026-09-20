import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u4yt2i7xs.css';
import '../../css/k/kw294vebg.css';
import '../../css/c/cvru1isjg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u4yt2i7xs"/><path class="kw294vebg"/><path class="cvru1isjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-pause-two-tone"} {...others} />);
}

export default Component;
