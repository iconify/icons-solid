import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kka-abb2t.css';
import '../../css/j/jdx778b3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kka-abb2t"/><path class="jdx778b3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:stack-push"} {...others} />);
}

export default Component;
