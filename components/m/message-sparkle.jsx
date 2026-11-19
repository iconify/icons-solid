import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v21nirblw.css';
import '../../css/c/cw3od-szd.css';
import '../../css/d/d6gi73mnm.css';
import '../../css/e/ensf0pusy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v21nirblw"/><path class="cw3od-szd"/><path class="d6gi73mnm"/><path class="ensf0pusy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:message-sparkle"} {...others} />);
}

export default Component;
