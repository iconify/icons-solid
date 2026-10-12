import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mtugqgbae.css';
import '../../css/v/v1bqg_bxb.css';
import '../../css/r/r39sfgpbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(1 0 0 -1 8.9 20.3)" class="mtugqgbae"/><rect transform="matrix(1 0 0 -1 8.9 20.3)" class="v1bqg_bxb"/><path class="r39sfgpbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:align-horizontally"} {...others} />);
}

export default Component;
