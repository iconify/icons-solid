import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tazu73b4s.css';
import '../../css/p/p_bzldb-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tazu73b4s"/><path class="p_bzldb-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:search-2-two-tone"} {...others} />);
}

export default Component;
