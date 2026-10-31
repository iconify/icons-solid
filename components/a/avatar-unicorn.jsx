import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hrxkuwm3e.css';
import '../../css/p/pml_b6baw.css';
import '../../css/c/c73q3ebkv.css';
import '../../css/y/yx03xnboz.css';
import '../../css/z/zlkz1cv3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="hrxkuwm3e wm-shadow"/><path class="pml_b6baw wm-shadow"/><path class="c73q3ebkv"/><path class="yx03xnboz"/><path class="zlkz1cv3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-unicorn"} {...others} />);
}

export default Component;
