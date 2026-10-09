import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvpxvsbif.css';
import '../../css/x/xph283bpq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qvpxvsbif"/><path class="xph283bpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:leaf-20-bold"} {...others} />);
}

export default Component;
