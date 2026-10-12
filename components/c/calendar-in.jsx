import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifivxibrp.css';
import '../../css/i/iwlw15b4j.css';
import '../../css/u/u_yh--4kl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="ifivxibrp"/><path class="iwlw15b4j"/><path class="u_yh--4kl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:calendar-in"} {...others} />);
}

export default Component;
