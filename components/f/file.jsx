import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jv2y62b4z.css';
import '../../css/p/p6wpkwb1d.css';
import '../../css/d/de2zhsbdv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jv2y62b4z"/><path class="p6wpkwb1d"/><path class="de2zhsbdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file"} {...others} />);
}

export default Component;
