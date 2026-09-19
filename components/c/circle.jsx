import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/re92cop1g.css';
import '../../css/b/bt1_89eei.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="re92cop1g"/><path class="bt1_89eei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:circle"} {...others} />);
}

export default Component;
