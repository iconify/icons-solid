import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbfqc9ipi.css';
import '../../css/o/oi7_5_auk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cbfqc9ipi"/><path class="oi7_5_auk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cloud-logging"} {...others} />);
}

export default Component;
