import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cm4ry-biv.css';
import '../../css/b/bk0qoubdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="chatbubbles-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="cm4ry-biv"/><path class="bk0qoubdl"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:chatbubbles-outline"} {...others} />);
}

export default Component;
