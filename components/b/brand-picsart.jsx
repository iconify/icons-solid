import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r8vbx7bdh.css';
import '../../css/f/f66k-abse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r8vbx7bdh"/><path class="f66k-abse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-picsart"} {...others} />);
}

export default Component;
