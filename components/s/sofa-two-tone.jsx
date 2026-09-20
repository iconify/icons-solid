import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vnmd9hble.css';
import '../../css/r/rk3-csywm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vnmd9hble"/><path class="rk3-csywm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sofa-two-tone"} {...others} />);
}

export default Component;
