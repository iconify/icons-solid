import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7clc9b5y.css';

const viewBox = {"width":1632,"height":1792};
const content = `<path class="q7clc9b5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:hand-stop-o"} {...others} />);
}

export default Component;
