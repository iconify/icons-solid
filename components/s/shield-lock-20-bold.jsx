import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ld3dvsbdz.css';
import '../../css/p/pudna3b6q.css';
import '../../css/a/a-axxkxuy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ld3dvsbdz"/><path class="pudna3b6q"/><path class="a-axxkxuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shield-lock-20-bold"} {...others} />);
}

export default Component;
