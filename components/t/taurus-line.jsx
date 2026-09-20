import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jf6z445bo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jf6z445bo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:taurus-line"} {...others} />);
}

export default Component;
