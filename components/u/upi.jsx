import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1_wl1bof.css';
import '../../css/g/gy0vq6mnp.css';
import '../../css/m/mjweazb7i.css';
import '../../css/g/gj-cykbml.css';
import '../../css/a/axtcofbkw.css';

const viewBox = {"width":432,"height":216};
const content = `<path class="z1_wl1bof"/><path class="gy0vq6mnp"/><path class="mjweazb7i"/><path class="gj-cykbml"/><path class="axtcofbkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:upi"} {...others} />);
}

export default Component;
