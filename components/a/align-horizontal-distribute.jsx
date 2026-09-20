import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pwd3o3boq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pwd3o3boq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:align-horizontal-distribute"} {...others} />);
}

export default Component;
