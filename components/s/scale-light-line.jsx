import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b76tzbbnu.css';
import '../../css/k/kw19el13e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b76tzbbnu"/><path class="kw19el13e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:scale-light-line"} {...others} />);
}

export default Component;
