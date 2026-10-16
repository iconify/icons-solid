import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dgyvohp4q.css';
import '../../css/q/qfnlpybxj.css';
import '../../css/k/kb9ry10cf.css';
import '../../css/n/n6buoflrb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dgyvohp4q"/><path class="qfnlpybxj"/><path class="kb9ry10cf"/><path class="n6buoflrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:game-controller-check"} {...others} />);
}

export default Component;
