import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/u/uern_gkkh.css';
import '../../css/v/v1nh1rboq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="uern_gkkh"/><path class="v1nh1rboq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-right-circle-20"} {...others} />);
}

export default Component;
