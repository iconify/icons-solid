import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jopm6tb3p.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jopm6tb3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:apache-flink"} {...others} />);
}

export default Component;
