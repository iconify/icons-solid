import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2x7zcb7n.css';
import '../../css/v/vwleoby9d.css';
import '../../css/z/z6hqqwbjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u2x7zcb7n"/><path class="vwleoby9d"/><path class="z6hqqwbjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:airplay"} {...others} />);
}

export default Component;
