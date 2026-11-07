import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ly14d-arz.css';
import '../../css/e/exasy4ryo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ly14d-arz"/><path class="exasy4ryo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-from-line-outline"} {...others} />);
}

export default Component;
