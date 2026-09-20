import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/za_k_5gja.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="za_k_5gja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:firecrawl-dark"} {...others} />);
}

export default Component;
