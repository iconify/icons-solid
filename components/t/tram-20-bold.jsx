import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dor66wbvq.css';
import '../../css/k/kwomwyfwn.css';
import '../../css/f/fdb759y4b.css';
import '../../css/j/jzsdjnblo.css';
import '../../css/a/aol1lebbt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dor66wbvq"/><path class="kwomwyfwn"/><path class="fdb759y4b"/><path class="jzsdjnblo"/><path class="aol1lebbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tram-20-bold"} {...others} />);
}

export default Component;
