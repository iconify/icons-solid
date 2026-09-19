import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k7agvlggf.css';
import '../../css/j/jkzqgictx.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="k7agvlggf"/><path class="jkzqgictx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:neo4j-wordmark"} {...others} />);
}

export default Component;
