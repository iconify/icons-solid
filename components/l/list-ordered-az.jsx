import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vphx_6btq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vphx_6btq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:list-ordered-az"} {...others} />);
}

export default Component;
