import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbcy72b_r.css';
import '../../css/q/q66ufvz7x.css';
import '../../css/g/g2xe6acff.css';
import '../../css/q/qyd3s_92q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sbcy72b_r"/><path class="q66ufvz7x"/><ellipse class="g2xe6acff"/><ellipse class="qyd3s_92q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:nutrition-outline"} {...others} />);
}

export default Component;
