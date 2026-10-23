import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/igeypfjlv.css';
import '../../css/c/cwutt3zuv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="igeypfjlv"/><path class="cwutt3zuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:card-sim"} {...others} />);
}

export default Component;
