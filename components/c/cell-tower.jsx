import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oupseqp3w.css';
import '../../css/g/g_ko1zbyv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oupseqp3w"/><path class="g_ko1zbyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cell-tower"} {...others} />);
}

export default Component;
