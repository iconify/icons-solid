import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fnmcfvtyh.css';
import '../../css/a/axqd7-lja.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fnmcfvtyh"/><path class="axqd7-lja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:copilot-24"} {...others} />);
}

export default Component;
