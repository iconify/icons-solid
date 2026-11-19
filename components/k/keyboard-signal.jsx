import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/olqhhhpbo.css';
import '../../css/j/j6dc850ik.css';
import '../../css/b/by6n-xb9g.css';
import '../../css/s/svvqsyw5n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="olqhhhpbo"/><path class="j6dc850ik"/><path class="by6n-xb9g"/><path class="svvqsyw5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:keyboard-signal"} {...others} />);
}

export default Component;
