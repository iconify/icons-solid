import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skpvnv86r.css';
import '../../css/l/lrldwibcs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="skpvnv86r"/><path class="lrldwibcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:trending-up-outline"} {...others} />);
}

export default Component;
