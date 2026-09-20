import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djbcecc-h.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="djbcecc-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:rice-outline"} {...others} />);
}

export default Component;
