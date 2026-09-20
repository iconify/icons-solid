import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lzd5qmb4t.css';
import '../../css/e/eg76xwbic.css';
import '../../css/j/jno4cqb6l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lzd5qmb4t"/><path class="eg76xwbic"/><path class="jno4cqb6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-hexagon"} {...others} />);
}

export default Component;
