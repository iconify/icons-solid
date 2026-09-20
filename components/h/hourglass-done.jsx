import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0gas8_s.css';
import '../../css/n/nkd2b7pcb.css';
import '../../css/i/i2k9wdb1i.css';
import '../../css/m/my6364gtl.css';
import '../../css/n/nom1l2ksv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="to0gas8_s"/><path class="nkd2b7pcb"/><path class="i2k9wdb1i"/><path class="my6364gtl"/><path class="nom1l2ksv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hourglass-done"} {...others} />);
}

export default Component;
