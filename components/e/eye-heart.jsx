import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nl0bm7b0t.css';
import '../../css/h/hy6t73bpt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="nl0bm7b0t"/><path class="hy6t73bpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:eye-heart"} {...others} />);
}

export default Component;
