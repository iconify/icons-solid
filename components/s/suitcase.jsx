import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/at2hwbuuf.css';
import '../../css/i/inpq61vtr.css';
import '../../css/h/hn0v7obye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="at2hwbuuf"/><rect class="inpq61vtr"/><path class="hn0v7obye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:suitcase"} {...others} />);
}

export default Component;
