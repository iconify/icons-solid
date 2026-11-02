import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x2ugeoviq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x2ugeoviq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:rotate-y-line"} {...others} />);
}

export default Component;
