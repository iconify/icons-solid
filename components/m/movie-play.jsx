import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mtr2n8b0s.css';
import '../../css/o/o9scry_ak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mtr2n8b0s"/><path class="o9scry_ak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:movie-play"} {...others} />);
}

export default Component;
