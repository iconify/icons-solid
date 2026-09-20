import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/czdr5rb7i.css';
import '../../css/t/tljtfac6y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="czdr5rb7i"/><path class="tljtfac6y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wash-temperature-6"} {...others} />);
}

export default Component;
