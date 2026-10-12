import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/knalmna7q.css';
import '../../css/e/e3uv20wjb.css';
import '../../css/l/l39p52str.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 15.28 9.18)" class="knalmna7q"/><rect transform="matrix(0 -1 -1 0 9.13 21.39)" class="knalmna7q"/><rect transform="matrix(0 -1 -1 0 21.44 21.39)" class="knalmna7q"/><rect transform="matrix(0 -1 -1 0 15.28 9.18)" class="e3uv20wjb"/><rect transform="matrix(0 -1 -1 0 9.13 21.39)" class="e3uv20wjb"/><rect transform="matrix(0 -1 -1 0 21.44 21.39)" class="e3uv20wjb"/><path class="l39p52str"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-organization"} {...others} />);
}

export default Component;
