import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bohi61rzr.css';
import '../../css/v/v1gt_db3q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bohi61rzr"/><path class="v1gt_db3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:torch-20-bold"} {...others} />);
}

export default Component;
