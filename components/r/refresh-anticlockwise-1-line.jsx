import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aerx4bbek.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aerx4bbek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:refresh-anticlockwise-1-line"} {...others} />);
}

export default Component;
