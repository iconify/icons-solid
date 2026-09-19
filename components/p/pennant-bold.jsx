import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a__s2g6zp.css';
import '../../css/t/twhmh5zey.css';
import '../../css/w/wqys70_0c.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="a__s2g6zp"><path class="twhmh5zey"/><path class="wqys70_0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:pennant-bold"} {...others} />);
}

export default Component;
