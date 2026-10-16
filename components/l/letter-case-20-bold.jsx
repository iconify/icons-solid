import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6ofuubxb.css';
import '../../css/a/aw4zs_blx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="x6ofuubxb"/><path class="aw4zs_blx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:letter-case-20-bold"} {...others} />);
}

export default Component;
