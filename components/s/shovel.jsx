import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/o/o1a4vtbzg.css';
import '../../css/r/r-mx4918m.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="o1a4vtbzg"/><path class="r-mx4918m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:shovel"} {...others} />);
}

export default Component;
