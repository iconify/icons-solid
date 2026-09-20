import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h-edy9bjw.css';
import '../../css/t/tljtfac6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h-edy9bjw"/><path class="tljtfac6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wash-temperature-5"} {...others} />);
}

export default Component;
