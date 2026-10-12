import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nlvulm7ll.css';
import '../../css/e/e1tciweeq.css';
import '../../css/g/glynuobqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nlvulm7ll"/><path class="e1tciweeq"/><path class="glynuobqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:toggle-off"} {...others} />);
}

export default Component;
