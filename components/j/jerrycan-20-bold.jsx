import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8_cvzaik.css';
import '../../css/y/yhfvti82b.css';
import '../../css/y/y6rvtrb9p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s8_cvzaik"/><path class="yhfvti82b"/><path class="y6rvtrb9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:jerrycan-20-bold"} {...others} />);
}

export default Component;
