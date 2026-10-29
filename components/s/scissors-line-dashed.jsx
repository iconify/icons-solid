import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wszr8nb0z.css';
import '../../css/e/egxneybyk.css';
import '../../css/q/ql-n_lccz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wszr8nb0z"/><path class="egxneybyk"/><path class="ql-n_lccz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:scissors-line-dashed"} {...others} />);
}

export default Component;
