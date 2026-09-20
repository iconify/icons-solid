import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iq62dem-e.css';
import '../../css/i/ii-0rpopf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iq62dem-e"/><path class="ii-0rpopf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:wind-turbine-two-tone"} {...others} />);
}

export default Component;
