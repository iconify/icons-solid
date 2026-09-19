import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9w77bbrk.css';
import '../../css/z/zbefq9b9n.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="c9w77bbrk"/><path class="zbefq9b9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:apachespark-wordmark"} {...others} />);
}

export default Component;
