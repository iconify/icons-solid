import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvi0cxbyw.css';
import '../../css/s/suxe2ovzi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yvi0cxbyw"/><path class="suxe2ovzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:voltage-tester-20"} {...others} />);
}

export default Component;
