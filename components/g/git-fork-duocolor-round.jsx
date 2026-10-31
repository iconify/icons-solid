import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dyunt-bon.css';
import '../../css/p/pyhjy9bbp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dyunt-bon"/><path class="pyhjy9bbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:git-fork-duocolor-round"} {...others} />);
}

export default Component;
