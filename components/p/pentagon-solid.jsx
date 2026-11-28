import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/te3bg7bvp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="te3bg7bvp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pentagon-solid"} {...others} />);
}

export default Component;
