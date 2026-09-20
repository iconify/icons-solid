import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok0vj4b8e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ok0vj4b8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:skip-previous-line"} {...others} />);
}

export default Component;
