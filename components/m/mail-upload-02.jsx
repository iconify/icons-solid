import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bwna43bhr.css';
import '../../css/d/df-j23bjo.css';
import '../../css/o/olf65k9xu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="bwna43bhr"/><path class="df-j23bjo"/><path class="olf65k9xu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-upload-02"} {...others} />);
}

export default Component;
