import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqjo_17sw.css';
import '../../css/b/bxk-0nxsq.css';
import '../../css/w/wtv0jqdvv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bqjo_17sw"/><path class="bxk-0nxsq"/><path class="wtv0jqdvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:recloser-20-bold"} {...others} />);
}

export default Component;
