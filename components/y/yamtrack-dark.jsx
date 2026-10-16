import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qg5ptdx_f.css';
import '../../css/h/hclia1bkf.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="qg5ptdx_f"/><path class="hclia1bkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:yamtrack-dark"} {...others} />);
}

export default Component;
