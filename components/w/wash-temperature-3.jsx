import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tljtfac6y.css';
import '../../css/u/uc1r41hlg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tljtfac6y"/><path class="uc1r41hlg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wash-temperature-3"} {...others} />);
}

export default Component;
