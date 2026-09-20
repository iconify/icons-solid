import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y5-v_xbay.css';
import '../../css/u/u-7ninbzs.css';
import '../../css/d/dno4_nblm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="y5-v_xbay"/><path class="u-7ninbzs"/><path class="dno4_nblm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:cast-duotone"} {...others} />);
}

export default Component;
