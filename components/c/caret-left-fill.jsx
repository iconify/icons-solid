import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ebm5oscgz.css';
import '../../css/z/zpkmj173e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ebm5oscgz"/><path class="zpkmj173e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:caret-left-fill"} {...others} />);
}

export default Component;
