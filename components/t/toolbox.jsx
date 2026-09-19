import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/g/gg4963rit.css';
import '../../css/y/y3tgw9b4u.css';
import '../../css/c/c8nsbsbjx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="gg4963rit"/><path class="y3tgw9b4u"/><path class="c8nsbsbjx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:toolbox"} {...others} />);
}

export default Component;
