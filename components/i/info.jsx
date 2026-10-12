import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qeot7jbji.css';
import '../../css/k/kiuf6hbjh.css';
import '../../css/g/g56h9qc2s.css';
import '../../css/n/n5zmh5klb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="qeot7jbji"/><circle transform="rotate(90 12 12)" class="kiuf6hbjh"/><path class="g56h9qc2s"/><path class="n5zmh5klb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:info"} {...others} />);
}

export default Component;
