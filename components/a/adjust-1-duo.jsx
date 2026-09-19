import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b90b8empi.css';
import '../../css/s/sekviebqb.css';
import '../../css/a/a70o7ccyb.css';
import '../../css/c/ctl48ubje.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="b90b8empi"/><path class="sekviebqb"/><path class="a70o7ccyb"/><path class="ctl48ubje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:adjust-1-duo"} {...others} />);
}

export default Component;
