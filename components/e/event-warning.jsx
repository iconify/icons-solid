import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gur1qyx5l.css';
import '../../css/q/qag32gbsa.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gur1qyx5l"/><path class="qag32gbsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:event-warning"} {...others} />);
}

export default Component;
