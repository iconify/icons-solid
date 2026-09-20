import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eiogu7bxw.css';
import '../../css/s/sj71gtfbi.css';
import '../../css/b/bw2eg7fze.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="eiogu7bxw"/><path class="sj71gtfbi"/><path class="bw2eg7fze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:rss-square"} {...others} />);
}

export default Component;
