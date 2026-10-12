import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q6us5vbnx.css';
import '../../css/b/bq7aq9dei.css';
import '../../css/f/fnlqenbng.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q6us5vbnx"/><path class="bq7aq9dei"/><path class="fnlqenbng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chicken-thigh"} {...others} />);
}

export default Component;
