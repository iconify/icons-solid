import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v4n02mblg.css';
import '../../css/t/toi2hkzzj.css';
import '../../css/a/aa73izajr.css';
import '../../css/z/ztax_ycjr.css';
import '../../css/b/bzrkcvbeh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v4n02mblg"/><path class="toi2hkzzj"/><path class="aa73izajr"/><circle class="ztax_ycjr"/><path class="bzrkcvbeh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:car-front-clock"} {...others} />);
}

export default Component;
