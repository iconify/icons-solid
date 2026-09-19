import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6_7uibvf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t6_7uibvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:zoom-out"} {...others} />);
}

export default Component;
