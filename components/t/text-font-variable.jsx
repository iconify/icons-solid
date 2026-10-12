import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pupmn7byp.css';
import '../../css/i/ibi79_0ja.css';
import '../../css/z/zy6u5qbug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(-90 12 18.05)" class="pupmn7byp"/><circle transform="rotate(-90 12 18.05)" class="ibi79_0ja"/><path class="zy6u5qbug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-font-variable"} {...others} />);
}

export default Component;
