import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ckxy5gb-z.css';
import '../../css/j/j-_3a7bqs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ckxy5gb-z"/><path class="j-_3a7bqs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:redo-2"} {...others} />);
}

export default Component;
