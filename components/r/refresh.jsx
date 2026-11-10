import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq3nvob2j.css';
import '../../css/k/klwjdcbgj.css';
import '../../css/q/q-fnl-bqx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="wq3nvob2j"/><path class="klwjdcbgj"/><path class="q-fnl-bqx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:refresh"} {...others} />);
}

export default Component;
