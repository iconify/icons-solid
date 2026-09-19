import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcczw9bad.css';
import '../../css/u/u5k1hcfaz.css';
import '../../css/j/jp-5skmgv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wcczw9bad"><path class="u5k1hcfaz"/><path class="jp-5skmgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:stream-bold"} {...others} />);
}

export default Component;
