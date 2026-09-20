import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l1vrwcaop.css';
import '../../css/b/bt9ybibdw.css';
import '../../css/h/h0_dwo2xe.css';
import '../../css/o/oi4pzjbhc.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="l1vrwcaop"/><path class="bt9ybibdw"/><path class="h0_dwo2xe"/><path class="oi4pzjbhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:oncology"} {...others} />);
}

export default Component;
