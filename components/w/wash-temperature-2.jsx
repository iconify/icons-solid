import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tljtfac6y.css';
import '../../css/u/ueosy05gd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tljtfac6y"/><path class="ueosy05gd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wash-temperature-2"} {...others} />);
}

export default Component;
