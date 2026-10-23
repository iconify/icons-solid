import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jc5wlobdx.css';
import '../../css/x/xcxup2bbz.css';
import '../../css/a/ax_ng4bad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jc5wlobdx"/><rect transform="matrix(0 -1 -1 0 15 22.43)" class="xcxup2bbz"/><path class="ax_ng4bad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tube-lotion"} {...others} />);
}

export default Component;
