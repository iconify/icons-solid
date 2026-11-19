import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ej9m1bu1q.css';
import '../../css/q/qwy_xqbmo.css';
import '../../css/s/s3uw6_nib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ej9m1bu1q"/><path class="qwy_xqbmo"/><path class="s3uw6_nib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:downscale-image"} {...others} />);
}

export default Component;
