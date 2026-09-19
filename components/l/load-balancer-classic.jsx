import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_nn80bhj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b_nn80bhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:load-balancer-classic"} {...others} />);
}

export default Component;
