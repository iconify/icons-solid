import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/go0c73cns.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="go0c73cns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:laptop-minimal-check-line"} {...others} />);
}

export default Component;
