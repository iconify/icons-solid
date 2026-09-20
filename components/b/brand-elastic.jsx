import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yvpl0v55c.css';
import '../../css/m/mqw_udb7v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yvpl0v55c"/><path class="mqw_udb7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-elastic"} {...others} />);
}

export default Component;
