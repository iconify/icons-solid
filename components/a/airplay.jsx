import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mptcd8b5i.css';
import '../../css/r/rsai_abhp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mptcd8b5i"/><path class="rsai_abhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:airplay"} {...others} />);
}

export default Component;
