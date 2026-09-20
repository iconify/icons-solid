import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mxdo5325g.css';
import '../../css/p/pyhpmlb1r.css';
import '../../css/k/k2buyulzh.css';
import '../../css/e/ei_6f8bku.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mxdo5325g"/><path class="pyhpmlb1r"/><path class="k2buyulzh"/><path class="ei_6f8bku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:npr"} {...others} />);
}

export default Component;
