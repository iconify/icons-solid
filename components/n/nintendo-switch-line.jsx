import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/soe3d3biv.css';
import '../../css/o/ouvk3bb1u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="soe3d3biv"/><path class="ouvk3bb1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:nintendo-switch-line"} {...others} />);
}

export default Component;
