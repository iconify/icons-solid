import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/epwhaes-t.css';
import '../../css/w/wysjzs6ya.css';
import '../../css/r/rbbd3hpog.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="epwhaes-t"/><path class="wysjzs6ya"/><path class="rbbd3hpog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-text"} {...others} />);
}

export default Component;
