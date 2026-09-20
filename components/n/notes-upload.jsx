import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g5xw19b4x.css';
import '../../css/j/ji7_itbgv.css';
import '../../css/k/kj_vf-_kl.css';
import '../../css/m/m-p2dze3c.css';
import '../../css/d/dpxfbyb9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g5xw19b4x"/><path class="ji7_itbgv"/><path class="kj_vf-_kl"/><path class="m-p2dze3c"/><path class="dpxfbyb9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:notes-upload"} {...others} />);
}

export default Component;
