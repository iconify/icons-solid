import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ut_30v0_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ut_30v0_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:font-sans-serif"} {...others} />);
}

export default Component;
