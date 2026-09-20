import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jhxi-trnl.css';
import '../../css/j/j835zw5-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="jhxi-trnl"/><path class="j835zw5-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:panel-top"} {...others} />);
}

export default Component;
