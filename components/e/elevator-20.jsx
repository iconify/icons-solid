import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyuwl4bpc.css';
import '../../css/m/m2qyafbre.css';
import '../../css/z/zi0m9n48q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vyuwl4bpc"/><path class="m2qyafbre"/><path class="zi0m9n48q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:elevator-20"} {...others} />);
}

export default Component;
