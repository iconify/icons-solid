import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz4j5z9qi.css';
import '../../css/g/g878ilbyw.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="sz4j5z9qi"/><path class="g878ilbyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:pnpm-wordmark"} {...others} />);
}

export default Component;
