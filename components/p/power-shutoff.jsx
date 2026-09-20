import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dn-xrwb_q.css';
import '../../css/q/qzipmcc8b.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dn-xrwb_q"/><path class="qzipmcc8b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:power-shutoff"} {...others} />);
}

export default Component;
