import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9bgmi4jn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j9bgmi4jn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-dashed-x"} {...others} />);
}

export default Component;
