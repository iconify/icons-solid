import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_fg-2buj.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="q_fg-2buj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:docs"} {...others} />);
}

export default Component;
