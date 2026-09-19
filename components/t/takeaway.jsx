import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casto_bef.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="casto_bef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:takeaway"} {...others} />);
}

export default Component;
