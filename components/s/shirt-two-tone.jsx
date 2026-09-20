import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rvn0e_bwg.css';
import '../../css/u/ux91ibruz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rvn0e_bwg"/><path class="ux91ibruz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:shirt-two-tone"} {...others} />);
}

export default Component;
