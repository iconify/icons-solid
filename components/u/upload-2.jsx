import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/ja39s95eo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ja39s95eo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:upload-2"} {...others} />);
}

export default Component;
