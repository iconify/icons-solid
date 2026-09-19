import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sfcsb5sbn.css';
import '../../css/j/jzgv6j3ns.css';
import '../../css/m/m9mk-kbax.css';
import '../../css/m/m9f1br6ib.css';
import '../../css/m/m217esbjc.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="sfcsb5sbn"/><path class="jzgv6j3ns"/><path class="m9mk-kbax"/><path class="m9f1br6ib"/><path class="m217esbjc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-stand-1-bold"} {...others} />);
}

export default Component;
