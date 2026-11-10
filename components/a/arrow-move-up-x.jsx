import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5l9n7_8l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j5l9n7_8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-move-up-x"} {...others} />);
}

export default Component;
