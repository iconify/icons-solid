import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsh9rtrrg.css';
import '../../css/x/xwe-p-b_d.css';
import '../../css/d/dqbj1nbqf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="tsh9rtrrg"><rect class="xwe-p-b_d"/><rect class="dqbj1nbqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:columns-2-bold"} {...others} />);
}

export default Component;
