import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brjq0bcwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="brjq0bcwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:social-x-fill"} {...others} />);
}

export default Component;
