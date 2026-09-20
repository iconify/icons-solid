import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rixntwbcn.css';
import '../../css/f/fnsafxb8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rixntwbcn"/><path class="fnsafxb8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:database-smile"} {...others} />);
}

export default Component;
