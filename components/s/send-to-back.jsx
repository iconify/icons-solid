import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gwi9pu5rq.css';
import '../../css/j/jd3ogzb0d.css';
import '../../css/n/nz1mdnb4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gwi9pu5rq"/><path class="jd3ogzb0d"/><path class="nz1mdnb4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:send-to-back"} {...others} />);
}

export default Component;
