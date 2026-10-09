import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bkgj9ib4r.css';
import '../../css/x/x1b3r-bpb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bkgj9ib4r"/><path class="x1b3r-bpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dump-truck-20-bold"} {...others} />);
}

export default Component;
