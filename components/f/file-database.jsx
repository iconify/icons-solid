import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u1o2x4bhi.css';
import '../../css/f/fe87wcc8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u1o2x4bhi"/><path class="fe87wcc8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:file-database"} {...others} />);
}

export default Component;
