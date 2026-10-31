import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tooj3i81n.css';
import '../../css/n/n0x1bobvd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="tooj3i81n"/><path class="n0x1bobvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:search-empty"} {...others} />);
}

export default Component;
