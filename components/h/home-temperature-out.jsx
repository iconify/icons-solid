import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxo7j6bat.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zxo7j6bat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:home-temperature-out"} {...others} />);
}

export default Component;
