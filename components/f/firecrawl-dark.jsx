import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o9-4w-bok.css';

const viewBox = {"width":50,"height":72};
const content = `<path class="o9-4w-bok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:firecrawl-dark"} {...others} />);
}

export default Component;
