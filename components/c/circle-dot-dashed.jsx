import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x9o_b7jqm.css';
import '../../css/j/jxl67pbry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x9o_b7jqm"/><circle class="jxl67pbry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:circle-dot-dashed"} {...others} />);
}

export default Component;
