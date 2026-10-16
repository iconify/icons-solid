import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2arlh74i.css';
import '../../css/g/gfbgo5b2g.css';
import '../../css/o/owlyunb_h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k2arlh74i"/><path class="gfbgo5b2g"/><path class="owlyunb_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:emissions-trading-20-bold"} {...others} />);
}

export default Component;
