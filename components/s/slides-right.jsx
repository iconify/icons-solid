import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x69sg6bxb.css';
import '../../css/u/uzypqwbss.css';
import '../../css/v/v1pciub8f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.23 20.43)" class="x69sg6bxb"/><rect transform="matrix(0 -1 -1 0 22.23 20.43)" class="uzypqwbss"/><path class="v1pciub8f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:slides-right"} {...others} />);
}

export default Component;
