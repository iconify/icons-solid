import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ax9c4lghs.css';
import '../../css/s/shh2lmd7z.css';
import '../../css/k/k0aooyyum.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ax9c4lghs"/><path clip-rule="evenodd" class="shh2lmd7z"/><path clip-rule="evenodd" class="k0aooyyum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:store-bold"} {...others} />);
}

export default Component;
