import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owpy5-7fq.css';
import '../../css/q/q6421ib4p.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="owpy5-7fq st1"/><path class="q6421ib4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:gitea-wordmark"} {...others} />);
}

export default Component;
