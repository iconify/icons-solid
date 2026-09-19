import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/s/s1k8qzb9c.css';
import '../../css/o/odr0o-arz.css';
import '../../css/g/gt2m0dm7y.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="gopnm44um"><path class="s1k8qzb9c"/><rect class="odr0o-arz"/><path class="gt2m0dm7y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:columns-1"} {...others} />);
}

export default Component;
