import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tkcfz_sfs.css';
import '../../css/m/m7zxn0x7x.css';
import '../../css/g/g974bwrku.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="tkcfz_sfs"/><path class="m7zxn0x7x"/><path class="g974bwrku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:image-blur"} {...others} />);
}

export default Component;
