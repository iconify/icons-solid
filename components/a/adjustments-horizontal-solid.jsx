import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_7hgk3tq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w_7hgk3tq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:adjustments-horizontal-solid"} {...others} />);
}

export default Component;
