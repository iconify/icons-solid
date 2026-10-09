import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ww9p1ok1f.css';
import '../../css/i/iipvbgbrx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ww9p1ok1f"/><path class="iipvbgbrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spatula-20-bold"} {...others} />);
}

export default Component;
