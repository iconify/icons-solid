import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ruj9_-f6y.css';
import '../../css/q/qaww7g93e.css';
import '../../css/w/wt9ktzjan.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ruj9_-f6y"/><path class="qaww7g93e"/><path class="wt9ktzjan"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:houses"} {...others} />);
}

export default Component;
