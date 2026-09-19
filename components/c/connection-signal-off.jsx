import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/on0krzm9t.css';
import '../../css/w/wdxgscteg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="on0krzm9t"/><path class="wdxgscteg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:connection-signal-off"} {...others} />);
}

export default Component;
