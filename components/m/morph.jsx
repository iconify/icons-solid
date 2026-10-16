import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6ynxgbsy.css';
import '../../css/j/j7x9chb1h.css';
import '../../css/x/x8m2etbbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b6ynxgbsy"/><path class="j7x9chb1h"/><path class="x8m2etbbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:morph"} {...others} />);
}

export default Component;
