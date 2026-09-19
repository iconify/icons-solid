import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vgeq-v25e.css';
import '../../css/i/iabrmvfcy.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="vgeq-v25e"/><path class="iabrmvfcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:search-poi"} {...others} />);
}

export default Component;
