import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km-yn0bgx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="km-yn0bgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:archive-stack-line"} {...others} />);
}

export default Component;
