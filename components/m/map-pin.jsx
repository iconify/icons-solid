import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x4bu7q8ep.css';
import '../../css/y/y_o9s-bxm.css';
import '../../css/m/m7ymjzb2h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x4bu7q8ep"/><path class="y_o9s-bxm"/><circle transform="rotate(90 12 8.98)" class="m7ymjzb2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:map-pin"} {...others} />);
}

export default Component;
