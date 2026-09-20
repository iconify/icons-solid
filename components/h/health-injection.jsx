import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_0et5b4i.css';
import '../../css/a/axk9wc20s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q_0et5b4i"/><path class="axk9wc20s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-injection"} {...others} />);
}

export default Component;
