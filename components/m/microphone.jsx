import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sb6pk9_pi.css';
import '../../css/i/ipe253n2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="sb6pk9_pi"/><path class="ipe253n2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:microphone"} {...others} />);
}

export default Component;
