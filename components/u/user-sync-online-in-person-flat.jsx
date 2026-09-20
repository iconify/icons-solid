import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mub-e0bwe.css';
import '../../css/m/m504a26ah.css';
import '../../css/h/h4it6t6aq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="mub-e0bwe"/><path clip-rule="evenodd" class="m504a26ah"/><path clip-rule="evenodd" class="h4it6t6aq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:user-sync-online-in-person-flat"} {...others} />);
}

export default Component;
