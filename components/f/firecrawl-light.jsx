import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2_fj7bbu.css';

const viewBox = {"width":50,"height":72};
const content = `<path class="d2_fj7bbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:firecrawl-light"} {...others} />);
}

export default Component;
