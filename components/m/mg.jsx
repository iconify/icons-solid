import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7wa49b_l.css';
import '../../css/w/wjvs9ks-p.css';
import '../../css/y/y1yz2mmft.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="c7wa49b_l"/><path class="wjvs9ks-p"/><path class="y1yz2mmft"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:mg"} {...others} />);
}

export default Component;
