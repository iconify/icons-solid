import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zkc-ohblp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zkc-ohblp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:packing-box-outline"} {...others} />);
}

export default Component;
