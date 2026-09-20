import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/saz8lgmuq.css';
import '../../css/p/pb0vhv85n.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="saz8lgmuq"/><path class="pb0vhv85n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:settings"} {...others} />);
}

export default Component;
