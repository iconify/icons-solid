import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tljtfac6y.css';
import '../../css/x/xe35ekbar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tljtfac6y"/><path class="xe35ekbar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wash-temperature-4"} {...others} />);
}

export default Component;
