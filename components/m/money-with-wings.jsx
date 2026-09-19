import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stqveac6i.css';
import '../../css/o/ovqpmu8ku.css';
import '../../css/j/j0tl0nz2w.css';
import '../../css/n/nfv7kqb0l.css';
import '../../css/h/hss7gab6n.css';
import '../../css/c/ct20nw9af.css';
import '../../css/e/eofed9buy.css';
import '../../css/v/vzxtxlbhq.css';
import '../../css/a/ag8i1fbby.css';
import '../../css/f/fwh4qc3xc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="stqveac6i"/><path class="ovqpmu8ku"/><path class="j0tl0nz2w"/><path class="nfv7kqb0l"/><path class="hss7gab6n"/><path class="ct20nw9af"/><path class="eofed9buy"/><path class="vzxtxlbhq"/><path class="ag8i1fbby"/><path class="fwh4qc3xc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:money-with-wings"} {...others} />);
}

export default Component;
