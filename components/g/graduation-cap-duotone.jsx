import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s4bfw0bgo.css';
import '../../css/g/giq90bbgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s4bfw0bgo"/><path clip-rule="evenodd" class="giq90bbgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:graduation-cap-duotone"} {...others} />);
}

export default Component;
