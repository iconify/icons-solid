import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0-h4wb-b.css';
import '../../css/o/ordrlvixz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k0-h4wb-b"/><path class="ordrlvixz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:camcoder"} {...others} />);
}

export default Component;
