import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrjmwob1j.css';
import '../../css/g/gbt6yvbgo.css';
import '../../css/u/u95awmdai.css';
import '../../css/n/n4gxhbcfl.css';
import '../../css/n/naj2oabkq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xrjmwob1j"/><path class="gbt6yvbgo"/><path class="u95awmdai"/><path class="n4gxhbcfl"/><path class="naj2oabkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:printer-3d-20-bold"} {...others} />);
}

export default Component;
