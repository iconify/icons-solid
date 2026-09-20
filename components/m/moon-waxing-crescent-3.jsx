import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6b1zhbzm.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="k6b1zhbzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:moon-waxing-crescent-3"} {...others} />);
}

export default Component;
