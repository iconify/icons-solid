import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ts4y51wse.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="ts4y51wse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:file-xml-bold"} {...others} />);
}

export default Component;
