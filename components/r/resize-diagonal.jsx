import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqs_9zbxh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="uqs_9zbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:resize-diagonal"} {...others} />);
}

export default Component;
