import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2l7e5b5j.css';
import '../../css/z/zqt46prvm.css';
import '../../css/l/l9jgh7bvz.css';
import '../../css/s/st45emjbc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="k2l7e5b5j"/><path class="zqt46prvm"/><path class="l9jgh7bvz"/><path class="st45emjbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:camera-plus-48-bold"} {...others} />);
}

export default Component;
