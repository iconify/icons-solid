import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mcfvnubzm.css';
import '../../css/q/q0wxspbkv.css';
import '../../css/g/gaqtzmgzk.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="mcfvnubzm"/><path class="q0wxspbkv"/><path class="gaqtzmgzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:lightning-duo"} {...others} />);
}

export default Component;
