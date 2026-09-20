import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nd4a67asn.css';
import '../../css/z/z5oy30bym.css';
import '../../css/c/c84qfybgn.css';
import '../../css/i/igkwyebxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="nd4a67asn"/><path class="z5oy30bym"/><path class="c84qfybgn"/><path class="igkwyebxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:science-fiction-alien-1"} {...others} />);
}

export default Component;
