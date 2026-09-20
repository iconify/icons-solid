import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af-2b-5_k.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="af-2b-5_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:file-xsl"} {...others} />);
}

export default Component;
