import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/js4f3kb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="js4f3kb5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:sad-square-solid"} {...others} />);
}

export default Component;
