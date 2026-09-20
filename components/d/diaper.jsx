import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d3jgf7b5x.css';
import '../../css/f/fm8ha9brp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="d3jgf7b5x"/><path class="fm8ha9brp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:diaper"} {...others} />);
}

export default Component;
