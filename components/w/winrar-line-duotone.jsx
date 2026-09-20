import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iwz_6mbwo.css';
import '../../css/r/rexxn0bul.css';
import '../../css/r/r4tet7bfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="iwz_6mbwo"/><path class="rexxn0bul"/><path class="r4tet7bfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:winrar-line-duotone"} {...others} />);
}

export default Component;
