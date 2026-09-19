import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sbg5d4pwg.css';
import '../../css/v/v6ajfqbvu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="sbg5d4pwg"/><path class="v6ajfqbvu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grid-remove-duo"} {...others} />);
}

export default Component;
