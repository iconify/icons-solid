import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ejm67ybkl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ejm67ybkl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:letter-spacing-fill"} {...others} />);
}

export default Component;
