import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccb7-b29b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ccb7-b29b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:bug-play"} {...others} />);
}

export default Component;
