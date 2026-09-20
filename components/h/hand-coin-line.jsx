import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bly2_8yev.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bly2_8yev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:hand-coin-line"} {...others} />);
}

export default Component;
