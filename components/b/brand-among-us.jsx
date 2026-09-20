import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tp-bgqb0c.css';
import '../../css/r/rphh_3hbp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tp-bgqb0c"/><path class="rphh_3hbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-among-us"} {...others} />);
}

export default Component;
