import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bp-w5nx6c.css';
import '../../css/b/b_pl5yblc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bp-w5nx6c"/><path class="b_pl5yblc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:calendar-minus-two-tone"} {...others} />);
}

export default Component;
