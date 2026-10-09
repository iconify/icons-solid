import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy5juccjo.css';
import '../../css/m/myqgc4b0y.css';
import '../../css/x/x3s8noxxt.css';
import '../../css/b/bmcev9bhk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gy5juccjo"/><path class="myqgc4b0y"/><path class="x3s8noxxt"/><path class="bmcev9bhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:atom-20-bold"} {...others} />);
}

export default Component;
