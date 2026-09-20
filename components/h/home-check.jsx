import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/i/i5dnz5ika.css';
import '../../css/p/pmt3aepsb.css';
import '../../css/a/a3uyjetey.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="i5dnz5ika"/><path class="pmt3aepsb"/><path class="a3uyjetey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:home-check"} {...others} />);
}

export default Component;
