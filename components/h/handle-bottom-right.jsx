import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhi6qobkj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bhi6qobkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:handle-bottom-right"} {...others} />);
}

export default Component;
