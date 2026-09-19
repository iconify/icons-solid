import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z8rrb3blu.css';
import '../../css/v/v3lazdikl.css';
import '../../css/q/qt3p9gqnz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="z8rrb3blu"/><path class="v3lazdikl"/><path class="qt3p9gqnz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:crown-2"} {...others} />);
}

export default Component;
