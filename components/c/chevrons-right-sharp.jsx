import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5yjy8bij.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t5yjy8bij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chevrons-right-sharp"} {...others} />);
}

export default Component;
