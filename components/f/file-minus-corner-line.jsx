import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebj4j99dm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ebj4j99dm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:file-minus-corner-line"} {...others} />);
}

export default Component;
