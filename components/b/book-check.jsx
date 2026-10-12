import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvf4v7u0f.css';
import '../../css/s/s0et71vlc.css';
import '../../css/d/d6x0zjiic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yvf4v7u0f"/><path class="s0et71vlc"/><path class="d6x0zjiic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:book-check"} {...others} />);
}

export default Component;
