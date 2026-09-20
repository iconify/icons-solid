import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0q_-7bba.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b0q_-7bba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:rewind-forward-5-line"} {...others} />);
}

export default Component;
