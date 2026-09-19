import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z50njmb0b.css';
import '../../css/p/pfahbl-ea.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="z50njmb0b"/><path class="pfahbl-ea"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:phone-remove-duo"} {...others} />);
}

export default Component;
