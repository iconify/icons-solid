import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a0ad3xbzg.css';
import '../../css/f/fov55i33z.css';
import '../../css/f/fcjq_rbcg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a0ad3xbzg"/><path class="fov55i33z"/><path class="fcjq_rbcg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-parsinta"} {...others} />);
}

export default Component;
