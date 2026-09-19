import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyff0-91k.css';
import '../../css/a/a4sazmbph.css';
import '../../css/z/zsgksfvhc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="gyff0-91k"/><rect class="a4sazmbph"/><path clip-rule="evenodd" class="zsgksfvhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:briefcase-medical"} {...others} />);
}

export default Component;
