import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ao_op1wvm.css';
import '../../css/r/ra4jvswis.css';
import '../../css/v/vni_78k-i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="ao_op1wvm"/><rect class="ra4jvswis"/><path class="vni_78k-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:briefcase"} {...others} />);
}

export default Component;
