import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oaq777bmt.css';
import '../../css/g/gghhl7bfh.css';
import '../../css/h/h4djq3b_y.css';
import '../../css/t/tn4munfne.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="oaq777bmt"/><path class="gghhl7bfh"/><path class="h4djq3b_y"/><path class="tn4munfne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:rwanda"} {...others} />);
}

export default Component;
