import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yt38y4bnd.css';
import '../../css/v/va4y6ihja.css';
import '../../css/t/t-w02pb9s.css';
import '../../css/m/m-jydibrh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="yt38y4bnd"/><path class="va4y6ihja"/><path clip-rule="evenodd" class="t-w02pb9s"/><path class="m-jydibrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:laptop-cog-duo"} {...others} />);
}

export default Component;
