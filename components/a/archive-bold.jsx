import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dquz6tbqg.css';
import '../../css/z/z4mywv58p.css';
import '../../css/x/x2chlabpl.css';
import '../../css/o/o0byzbpda.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="dquz6tbqg"/><path clip-rule="evenodd" class="z4mywv58p"/><path class="x2chlabpl"/><path clip-rule="evenodd" class="o0byzbpda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:archive-bold"} {...others} />);
}

export default Component;
