import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h2-2dgnfu.css';
import '../../css/j/jhxi-trnl.css';
import '../../css/t/t7vb-cbsk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h2-2dgnfu"/><rect class="jhxi-trnl"/><path class="t7vb-cbsk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:table"} {...others} />);
}

export default Component;
