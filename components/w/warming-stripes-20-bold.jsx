import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1vduib2t.css';
import '../../css/h/htcxxr-ks.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n1vduib2t"/><path class="htcxxr-ks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:warming-stripes-20-bold"} {...others} />);
}

export default Component;
