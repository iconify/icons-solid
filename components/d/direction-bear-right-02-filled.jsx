import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggh9rqprt.css';
import '../../css/z/zee_subyv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ggh9rqprt"/><path class="zee_subyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:direction-bear-right-02-filled"} {...others} />);
}

export default Component;
